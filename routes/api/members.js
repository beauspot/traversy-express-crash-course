import express from "express";
import members from "../../members.js";
import * as uuid from "uuid";

// router
const router = express.Router();

// gets all members route
router.get("/", (req, res) => res.json(members));

// getting a single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

// creating a member
router.post("/", (req, res) => {
  //res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email)
    res.status(400).json({ msg: `Pls include a name and an Email` });
  else members.push(newMember);
  //res.json(members);
  res.redirect("/");
});

// update member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: "Member was updated", member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

// deleting a member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member Deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

export default router;
