import mongoose from 'mongoose';
import {validationResult} from 'express-validator/check';

import {ContactSchema} from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err){
            res.send(err);
        }

        res.status(201).json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err);
        }

        res.status(200).json(contact);
    });
};

export const getContactWithId = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }

        res.status(200).json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true},
        (err, contact) => {
            if(err){
                res.send(err);
            }
            res.status(200).json(contact);
        });
};

export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactId}, (err) => {
        if(err){
            res.send(err);
        }

        res.json({message: 'Successfully deleted contact'});
    });
};
