const mongoose = require ("mongoose");


const JobSchema = mongoose.Schema({
    poste: {
        type: String,
        required: true
    },
    entrprise:{
        type: String,
        required: true
    },
    offerLink:{
        type: String,
        required: true
    }
    ,
    typeOfJob: {
        type: String,
        enum: ["alternance", "stage", "CDI", "CDD", "Freelance", "Temps plein", "Temps partiel", "job etudian", "Autre"],
        default: "Autre"
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
    // ,
    // date_candidature: {
    //     type: Date,
    //     required: true
    // },
    status: {
        type: String,
        enum: ["En attente", "entretien prevu",  "Accepté", "Refusé"],
        default: "En attente"
    },
}, {
    timestamps: {createdAt: true}
});





module.exports = mongoose.model("Job", JobSchema);


