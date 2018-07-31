// Core
import express from 'express';
import os from 'os';

const router = express.Router();

function toMb(bytes) {
  return Math.floor(bytes / 1024 / 1024);
}

router.get('/', (req, res) => {
  const processMem = process.memoryUsage();
  const stats = {
    memory: {
      system: {
        free: toMb(os.freemem()),
        total: toMb(os.totalmem())
      },
      process: {
        rss: toMb(processMem.rss),
        heapTotal: toMb(processMem.heapTotal),
        heapUsed: toMb(processMem.heapUsed)
      }
    },
    loadavg: os.loadavg(),
    cpuCount: os.cpus().length,
    uptime: {
      system: Math.floor(os.uptime()),
      process: Math.floor(process.uptime())
    }
  };

  res.json(stats);
});

export default router;
