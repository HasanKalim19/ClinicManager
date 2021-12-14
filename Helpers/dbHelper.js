
const moment = require('moment')
class Helper { /**
     * 
     * @param {*} data 
     */
    addUpdatedTimestamps(data) {

        if (data.length) {
            return data.map(d => {
                d.created_at = new Date()
                return d;
            })
        }
        data.updated_at = new Date()

        return data;
    }

    /**
     * 
     * @param {*} dob 
     */
    findAge(dob) {
        return moment(new Date()).diff(moment(dob), 'years');
    }

    /**
     * 
     * @param {*} data 
     */
    shallowCopy(data) {
        return JSON.parse(JSON.stringify(data));
    }

    /**
     * 
     * @param {*} arr 
     * @param {*} key 
     */
    getUniqueElements(arr, key) {
        return new Set(arr.map(a => a[`${key}`]));
    }

    /**
     * 
     */
    getRandomNumberHash() {
        return Math.floor(Math.random() * 10000000000);
    }

    /**
     * 
     * @param {*} arr 
     */
    filterNonNull(arr) {
        return arr.filter(e => e !== null && e !== undefined);
    }

    /**
     * 
     * @param {*} data 
     */
    removeTimestamps(data) {

        if (data.length) {
            return data.map(d => {
                delete d.created_at;
                delete d.updated_at;
                delete d.contact_person_id;
                return d;
            })
        }

        delete data.created_at;
        delete data.updated_at;
        delete data.contact_person_id;
        return data;
    }

    /**
     * 
     * @param {*} repo 
     * @param {*} page 
     * @param {*} per_page 
     * @param {*} order 
     * @param {*} order_by 
     * @param {*} filter 
     * @param {*} where 
     * @param {*} include 
     */
    async getPaginatedRecords(repo, page, per_page, order, order_by, filter, where, include) {

        const orderBy = order_by ? order_by : 'ASC';

        const recordOrder = order ? order : 'id';

        const whereClause = filter ? where : null;

        const options = {
            page: parseInt(page),
            paginate: parseInt(per_page),
            order: [
                [`${recordOrder}`, `${orderBy}`]
            ],
            include,
            where: {
                ... whereClause
            }
        }

        let {docs, pages, total} = await repo.pagination(options);

        return {docs: this.shallowCopy(docs), pages, total};

    }

    /**
     * 
     * @param {*} arr 
     * @param {*} value 
     */
    findContactPersonByType(arr, value) {
        return arr && arr.length ? arr.find(a => a.contactPerson && a.contactPerson.contactPersonType && a.contactPerson.contactPersonType.slug === value) : null;
    }

    /**
     * 
     * @param {*} arr 
     * @param {*} value 
     */
    findContactPersonByTypeForHealthApp(arr, value) {
        return arr && arr.length ? arr.find(a => a.contactPersonType && a.contactPersonType.slug === value) : null;
    }

    /**
     * 
     * @param {*} key 
     * @param {*} obj 
     */
    deleteAttributes(key, obj) {

        if (!obj || !Object.keys(obj).length) {
            return null
        }

        if (key.length) {
            for (const k of key) {
                delete obj[k];
            }
            return obj;
        }

        delete obj[key]
    }

    findAddressByType(arr, value) {
        return arr && arr.length ? arr.find(e => e.type === value) : null;
    }


    formatContactPersonObject(contactPersons) {

        let {
            contactPerson,
            ...otherAttributes
        } = contactPersons;

        contactPerson = Array.isArray(contactPerson) ? contactPerson[0] : contactPerson;

        otherAttributes.contactPerson = null;

        if (contactPerson && Object.keys(contactPerson).length) {
            const {
                contactPersonAddresses,
                ...otherContactPersonAddresses
            } = contactPerson

            const mailAddress = this.findAddressByType(contactPersonAddresses, 'mailing');
            const residentialAddress = this.findAddressByType(contactPersonAddresses, 'residential');

            otherAttributes.contactPerson = {
                ...otherContactPersonAddresses,
                mail_address: mailAddress ? mailAddress : null,
                residential_address: residentialAddress ? residentialAddress : null
            };
        }


        return otherAttributes;
    }

    formatContactPersonObjectForHealthApp(contactPerson) {

        const {
            contactPersonAddresses,
            ...otherContactPersonAddresses
        } = contactPerson

        const mailAddress = this.findAddressByType(contactPersonAddresses, 'mailing');
        const residentialAddress = this.findAddressByType(contactPersonAddresses, 'residential');

        return {
            ...otherContactPersonAddresses,
            mail_address: mailAddress ? mailAddress : null,
            residential_address: residentialAddress ? residentialAddress : null
        };

    }

    checkNotNullableKeysLength(obj) {

        const keys = Object.keys(obj);

        return keys.filter(k => obj[k] !== null)
    }

    checkArrayLength(arr) {
        if (arr && arr.length) {
            return true;
        }
        return false;
    }

}

module.exports = new Helper();
