const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//bring in model//
const Item = require("../../models/Items");

// @route GET api/items
// @desc GET All items
// @access public

router.get("/", (req, res) => {
  console.log("loading");
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/items
// @desc Create a Poste
// @access private

router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  //.save() creates a promise//
  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access private

router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
  // const { items } = this.state;
  // return(
  //     <Container>
  //         <Button
  //         color="dark"
  //         style={{marginBottom: "2rem" }}
  //         onClick={() => {
  //             const name = prompt('enter item');
  //             if(name) {
  //                 this.setState(state => ({
  //                     items: [...state.items, { id: uuid(), name }]
  //                 }))
  //             }
  //         }}>Add Item</Button>
  //     </Container>
  // )
});

module.exports = router;
