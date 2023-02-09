import express from 'express';

import { createVolunteer , getVolunteers} from '../controllers/volunteerController.js';

const router = express.Router();

router.post('/volunteer/create', createVolunteer);
router.get('/volunteer' ,  getVolunteers );

export default router;