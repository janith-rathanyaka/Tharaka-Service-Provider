const db = require("../../../config/database");

exports.addFood = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { fcat, ftype, fdesc, floca, famount, fprice } = req.body; 
  const { rows } = await db.query(
    "INSERT INTO food (fcat, ftype, fdesc, floca, famount, fprice, cid) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
    [fcat, ftype, fdesc, floca, famount, fprice, cid]
  );

  res.status(201).send({
    message: "Food job added successfully!",
    body: {
      job: { fcat, ftype, fdesc, floca, famount, fprice, cid }
    },
  });
};

exports.listFood = async (req, res) => {
  const response = await db.query('SELECT * FROM food INNER JOIN client ON food.cid = client.cid ORDER BY fid DESC');
  res.status(200).send(response.rows);
};

exports.listPosts = async (req, res) => {
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Food & Cuisine' ORDER BY post_id DESC");
  res.status(200).send(response.rows);
};