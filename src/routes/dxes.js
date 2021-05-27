const { Router } = require('express');
const router = Router();
const { getDx, getDxes, createDx } = require('../controllers/dxes.controller');

import { checkDox } from '../middlewares';

router.route('/')
	.get(getDxes)
	.post([checkDox.checkContentLength, checkDox.checkDoubleRoute, checkDox.checkCaptcha], createDx)
router.route('/:id')
	.get([checkDox.checkVerified, checkDox.addView], getDx)

module.exports = router; 