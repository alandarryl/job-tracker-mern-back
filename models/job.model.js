const mongoose = require ("mongoose");


const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    requiredSkills: {
        type: String,
        required: true
    },
    typeOfJob: {
        type: String,
        enum: ["Alternance", "stage", "CDI", "CDD", "Freelance", "Temps plein", "Temps partiel", "job etudian", "Autre"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_posted: {
        type: Date,
        required: true
    },
    date_candidature: {
        type: Date,
        required: true
    },
    moyen_candidature:{
        type: String
    },
    status: {
        type: String,
        enum: ["En attente", "entretien prevu",  "Accepté", "Refusé"],
        default: "En attente"
    },
    contact: {
        site_web: {type: String},
        email: {type: String},
        phone: {type: String},
        linkedin: {type: String}
    },
    rappel: {
        premier_rappel: {type: Date , required: true },
        second_rappel: {type: Date},
        troisieme_rappel: {type: Date}
    },
}, {
    timestamps: {createdAt: true}
});





module.exports = mongoose.model("Job", JobSchema);


