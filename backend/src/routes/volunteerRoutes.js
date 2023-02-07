import express from 'express';

import { createVolunteer } from '../controllers/volunteerController.js';

const router = express.Router();

router.post('/volunteer/create', createVolunteer);

export default router;