const router = require('express').Router();
const authRoute = require('./auth.ts');
const usersRoute = require('./users.ts');
const doctorsRoute = require('./doctors.ts');
const appointmentsRoute = require('./appointments.ts');

router.use('/auth', authRoute);
router.use('/users', usersRoute);
router.use('/doctors', doctorsRoute);
router.use('/appointments', appointmentsRoute);

module.exports = router;
