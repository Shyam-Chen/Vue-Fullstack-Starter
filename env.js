function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.PROJECT_NAME = process.env.PROJECT_NAME || 'vue-by-example-dev';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';

  this.SITE_PORT = process.env.SITE_PORT || 8000;
  this.SITE_URL = process.env.SITE_URL || `http://${this.HOST_NAME}:${this.SITE_PORT}`;

  this.FUNC_PORT = process.env.FUNC_PORT || 5000;
  this.FUNC_URL = process.env.FUNC_URL || `http://${this.HOST_NAME}:${this.FUNC_PORT}/${this.PROJECT_NAME}/us-central1`;

  this.APP_BASE = process.env.APP_BASE || '/';

  this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || 'UA-84381641-2';

  this.SENTRY_DSN = process.env.SENTRY_DSN || null;
  this.RENDERTRON_URL = process.env.RENDERTRON_URL || null;
}

module.exports = new Environments();
