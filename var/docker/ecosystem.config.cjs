module.exports = {
  apps: [
    {
      name: 'nginx',
      script: 'nginx',
      args: '-g "daemon off;"',
      autorestart: true,
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'backend',
      cwd: '/app/apps/backend',
      script: 'pnpm',
      args: 'run start',
      autorestart: true,
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
      max_memory_restart: '1G',
    },
    {
      name: 'frontend',
      cwd: '/app/apps/frontend',
      script: 'pnpm',
      args: 'run start',
      autorestart: true,
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
      max_memory_restart: '1G',
    },
    {
      name: 'orchestrator',
      cwd: '/app/apps/orchestrator',
      script: 'pnpm',
      args: 'run start',
      autorestart: true,
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
      max_memory_restart: '1G',
    },
  ],
};
