import slugify from 'slugify';

import Volunteer from '../models/volunteerSchema.js';

export const createVolunteer= (req, res) =>{

    const {
        title,
        description,
        location,
        commitment,
        email
    } = req.body;

    const volunteer = new Volunteer({
        title : title,
        slug : slugify(title),
        description,
        location,
        commitment,
        email
    });

    volunteer.save(
        (error , volunteer) => {
            if(error) return res.status(400).json({error});
            if(volunteer){
                res.status(200).json({volunteer});
            }
        }
    );


}

export const getVolunteers =async(req, res) =>{
        const volunteers = await Volunteer.find();
        res.json(volunteers);

}