const db = require("../../../config/database");

exports.addPlant = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { pcat, pdesc, ploca, pprice, pimage } = req.body;
  const { rows } = await db.query(
    "INSERT INTO plant (pcat, pdesc, ploca, pprice, pimage, cid) VALUES ($1, $2, $3, $4, $5, $6)", 
    [pcat, pdesc, ploca, pprice, pimage, cid]
  );

  res.status(201).send({
    message: "Plant job added successfully!",
    body: {
      job: { pcat, pdesc, ploca, pprice, pimage, cid }
    },
  });
};

exports.listPlant = async (req, res) => {
  const response = await db.query('SELECT * FROM plant INNER JOIN client ON plant.cid = client.cid ORDER BY pid DESC');
  res.status(200).send(response.rows);
};

exports.listPosts = async (req, res) => {
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Plants & Crops' ORDER BY post_id DESC");
  res.status(200).send(response.rows);
};