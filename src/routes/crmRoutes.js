import {check} from 'express-validator/check';

import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact,
} from '../controllers/crmController';
import logger from '../middlewares/logger';
import {register, login, loginRequired} from '../controllers/userController';

const validateContactRequest = [check('contactId').isMongoId()];

const crmRoutes = app => {
    app.route('/contact')
        .get(logger,
            loginRequired,
            getContacts
        )
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactId')
        .get(validateContactRequest, loginRequired, getContactWithId)
        .put(loginRequired, updateContact)
        .delete(loginRequired,deleteContact);

    app.route('/auth/register')
        .post(register);

    app.route('/auth/login')
        .post(login);

};

export default crmRoutes;
