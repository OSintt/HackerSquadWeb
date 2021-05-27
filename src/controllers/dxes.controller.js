const dxCtrl = {};
const Dx = require('../models/Dxes');

dxCtrl.getDxes = async (req, res) => {
	let findUs = await Dx.find();
	res.status(200).json(findUs);
}

dxCtrl.getDx = async (req, res) => {
	let findDx = await Dx.findOne({title: req.params.id});
	res.status(200).json(findDx);
}

dxCtrl.createDx = async (req, res) => {
	const { title, author, content } = req.body; 
	let newDx = new Dx({
		title: title,
		author: author,
		content: content
	});
	newDx.save();
	res.status(200).json({message: "Se ha creado el dox con éxito"});
}



module.exports = dxCtrl;