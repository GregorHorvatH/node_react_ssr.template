export const title = 'My awesome company';

export const logo = `${process.env.PUBLIC_URL}/images/HG_logo.png`;

export const contacts = {
  address: 'Kyiv, Main str, 123',
  phone: '+38(067)123-45-67',
  email: 'admin@gmail.com'
};

export const meta = [
  {
    charset: 'UTF-8'
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
  {
    httpEquiv: 'X-UA-Compatible',
    content: 'IE=edge'
  },
  {
    name: 'description',
    content: title
  },
  {
    name: 'theme-color',
    content: '#2A3F54'
  }
];

export const link = [
  {
    rel: 'shortcut icon',
    // href: `${process.env.PUBLIC_URL}/favicon.ico?v1`
    href: logo
  }
];

export const script = [];

export const noscript = [];
