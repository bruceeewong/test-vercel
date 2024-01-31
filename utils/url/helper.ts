export function getDomainNamePort() {
  const domain = window.location.hostname;
  const port = window.location.port;
  return domain + (port ? ":" + port : "");
}

export function getProtocol() {
  return window.location.protocol;
}
