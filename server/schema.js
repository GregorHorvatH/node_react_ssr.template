import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import db from './dbPostgres';
import dbMongo from './dbMongo';

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
export function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      projections[selection.name.value] = true;

      return projections;
    },
    {}
  );
}

const todo = new GraphQLObjectType({
  name: 'todo',
  description: 'Todos',
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(todo) {
          return todo._id;
        }
      },
      title: {
        type: GraphQLString,
        resolve(todo) {
          return todo.title;
        }
      },
      description: {
        type: GraphQLString,
        resolve(todo) {
          return todo.description;
        }
      },
      userId: {
        type: GraphQLInt,
        resolve(todo) {
          return todo.userId;
        }
      },
      user: {
        type: user,
        resolve(todo) {
          return db.models.user.findById(todo.userId);
        }
      }
    };
  }
});

const post = new GraphQLObjectType({
  name: 'post',
  description: 'Blog post',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(post) {
          return post.id;
        }
      },
      title: {
        type: GraphQLString,
        resolve(post) {
          return post.title;
        }
      },
      content: {
        type: GraphQLString,
        resolve(content) {
          return content.content;
        }
      },
      user: {
        type: user,
        resolve(post) {
          return post.getUser();
        }
      }
    };
  }
});

const pet = new GraphQLObjectType({
  name: 'pet',
  description: 'This presents a pet',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(pet) {
          return pet.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(pet) {
          return pet.name;
        }
      },
      age: {
        type: GraphQLInt,
        resolve(pet) {
          return pet.age;
        }
      },
      user: {
        type: user,
        resolve(pet) {
          return pet.getUser();
        }
      }
    };
  }
});

const user = new GraphQLObjectType({
  name: 'user',
  description: 'This represents a user',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(user) {
          return user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(user) {
          return user.lastName;
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email;
        }
      },
      post: {
        type: GraphQLList(post),
        resolve(user) {
          return user.getPosts();
        }
      },
      pet: {
        type: GraphQLList(pet),
        resolve(user) {
          return user.getPets();
        }
      },
      todo: {
        type: GraphQLList(todo),
        resolve(user) {
          return user.getTodos();
        }
      }
    };
  }
});

const query = new GraphQLObjectType({
  name: 'query',
  description: 'Root query object',
  fields: () => {
    return {
      user: {
        type: new GraphQLList(user),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return db.models.user.findAll({ where: args });
        }
      },
      post: {
        type: new GraphQLList(post),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return db.models.post.findAll({ where: args });
        }
      },
      pet: {
        type: new GraphQLList(pet),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return db.models.pet.findAll({ where: args });
        }
      },
      todo: {
        type: new GraphQLList(todo),
        args: {
          _id: {
            type: GraphQLString
          }
        },
        resolve: (root, data, source, fieldASTs) => {
          const projections = getProjection(fieldASTs);
          const foundItems = new Promise((resolve, reject) => {
            dbMongo.todosModel.find(
              data,
              projections,
              (err, todos) => (err ? reject(err) : resolve(todos))
            );
          });

          return foundItems;
        }
      }
    };
  }
});

const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'Functions to set stuff',
  fields: () => {
    return {
      addUser: {
        type: user,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(source, args) {
          return db.models.user.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      },
      addPost: {
        type: post,
        args: {
          userId: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          },
          content: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(source, args) {
          return db.models.user.findById(args.userId).then(user => {
            return user.createPost({
              title: args.title,
              content: args.content
            });
          });
        }
      },
      updateUser: {
        type: user,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(source, args) {
          return db.models.user.findById(args.id).then(user => {
            return user.update({
              firstName: args.firstName,
              lastName: args.lastName,
              email: args.email.toLowerCase()
            });
          });
        }
      }
    };
  }
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
