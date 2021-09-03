const db = require("../../config/database");

exports.addPost = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { category, description, location, price, image } = req.body;
  const { rows } = await db.query(
    "INSERT INTO clientposts (category, description, location, price, image, cid) VALUES ($1, $2, $3, $4, $5, $6)",
     [category, description, location, price, image, cid]
  );

  res.status(201).send({
    message: "Post added successfully!",
    body: {
      job: { category, description, location, price, image, cid }
    },
  });
};

exports.listClients = async (req, res) => {
  const response = await db.query('SELECT * FROM client');
  res.status(200).send(response.rows);
};

exports.listClient = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM client WHERE cid=$1',
  [cid]
  );
  res.status(200).send(response.rows);
};

exports.profile = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM clientposts WHERE cid=$1 ORDER BY post_id DESC",
    [cid]
  );
  res.status(200).send(response.rows);
};

exports.noti = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM notification WHERE client_id=$1",
    [cid]
  );
  res.status(200).send(response.rows);
};