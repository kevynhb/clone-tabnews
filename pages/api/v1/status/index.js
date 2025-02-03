import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const version = await database.query("SHOW server_version");
  const formatVersion = version.rows[0].server_version;

  const maxConnections = await database.query("SHOW max_connections");
  const formatMaxConnections = parseInt(maxConnections.rows[0].max_connections);

  const usedConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active';",
  );
  const formatUsedConnections = parseInt(usedConnections.rows[0].count);

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  // "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = 'local_db';",

  response.status(200).json({
    updated_at: updatedAt,
    version_v: formatVersion,
    max_connections: formatMaxConnections,
    used_connections: formatUsedConnections,
  });
}

export default status;
