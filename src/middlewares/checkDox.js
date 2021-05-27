const Dx = require('../models/Dxes');
const request = require('request');

export const checkDoubleRoute = async (req, res, next) => {
	const route = await Dx.findOne({title: req.body.title});
	if (route) return res.status(200).json({message: "Ya existe un dox con ese título"});
    next();
}

export const checkContentLength = async (req, res, next) => {
    const { title, content, author } = req.body;
    if (title.length <= 2) return res.status(200).json({message: "Por favor, agréguele un título válido al dox"});
    if (author.length <= 2) return res.status(200).json({message: "Por favor, agréguele un autor válido al dox"});
    if (content.length < 15) return res.status(200).json({message: "Por favor, agregue más contenido al dox"});
    next();
}

export const checkVerified = async (req, res, next) => {
    const route = await Dx.findOne({title: req.params.id});
    if (route) {
        if (route.verified === false) return res.status(200).json({message: "Este dox aún no ha sido verificado"});
        next();
    } else {
        res.status(200).json({message: "404 not found"});
    }
}

export const checkCaptcha = async (req, res, next) => {
    const captcha = req.body.captcha;
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (captcha === undefined || captcha === "" || captcha === null || captcha === false) {
        return res.status(200).json({success: false, message: "Por favor, complete el captcha"});
    }
    const secretKey = "6LeXkdAaAAAAAI094AnJZyRRjsv3EGnVopiPZpIQ";
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${userIp}`;

    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            return res.status(200).json({success: false, message: "Por favor, complete el captcha"});
        } else {
            res.status(201).json({success: true, message: "Captcha passed"})
            next();
        } 
    });
}

export const addView = async (req, res, next) => {
    const route = await Dx.findOne({title: req.params.id});
    if (route) {
        let newViews = route.views + 1;
        route.views = newViews;
        route.save();
        next();
    } else {
        res.status(404).json({message: "404 not found"});
    }
}

