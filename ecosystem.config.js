module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
      {
        name: "acct-api",
        script: "app.js",
        watch: false,
        ignore_watch: ["node_modules", "public", "log", "package-lock.json", ".git", ".vscode"],
        instances: 4,
        exec_mode: "cluster",
        merge_logs: true,
        cron_restart: "0 3 * * *",
        env: {
          NODE_ENV: "dev",
          UV_THREADPOOL_SIZE: 20,
          TZ: "Asia/Hong_Kong"
        },
        env_prod: {
          NODE_ENV: "prod"
        }
      },
    ],
  };
  