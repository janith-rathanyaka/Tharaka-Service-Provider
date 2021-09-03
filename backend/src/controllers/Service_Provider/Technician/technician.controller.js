const db = require("../../../config/database");

exports.addTech = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { tcat, tdesc, tloca, tavail } = req.body; 
  const { rows } = await db.query(
    "INSERT INTO technician (tcat, tdesc, tloca, tavail, cid) VALUES ($1, $2, $3, $4, $5)", [tcat, tdesc, tloca, tavail, cid]
  );

  res.status(201).send({
    message: "Technician job added successfully!", 
    body: {
      job: { tcat, tdesc, tloca, tavail, cid }
    },
  });
};

exports.listTech = async (req, res) => {
  const response = await db.query('SELECT * FROM technician INNER JOIN client ON technician.cid = client.cid ORDER BY tid DESC');
  res.status(200).send(response.rows); 
};

exports.listTechID = async (req, res) => {
  const tid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM technician INNER JOIN client ON technician.cid = client.cid WHERE tid=$1', [tid]);
  res.status(200).send(response.rows); 
};

exports.right = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM technician WHERE cid=$1', [cid]);
  res.status(200).send(response.rows); 
};

exports.listPosts = async (req, res) => {
  // const tid = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Technician' ORDER BY post_id DESC ");
  res.status(200).send(response.rows); 
};

exports.updateTechJob = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { tcat, tdesc, tloca, tavail } = req.body;

  const response = await db.query(
    "UPDATE technician SET tcat = $1, tdesc = $2, tloca = $3, tavail=$4 WHERE cid = $5", 
    [tcat, tdesc, tloca, tavail, cid]
  );

  res.status(200).send({ message: "Tech Job Updated Successfully!" });
};