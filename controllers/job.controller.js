const createError = require('../middlewares/error');
const ModelJob = require('../models/job.model');

const getAll = async (req,res, next) =>{
    try{
        //
        const jobs = await ModelJob.find();

        if(!job) return res.status(404).json("Jobs not found");

        res.status(200).json(jobs)

    }catch(error){
        //
        next(createError(500, error.message))
    }
};


const enterJob = async (res, req, next) =>{
    try{
        //

        const job = await ModelJob.create(req.body);
        res.status(201).json(article);

    }catch(error){
        //
        next(createError(500, "Failed enter job"))
    }
}

const deleteEnterJob = async (res, req, next) =>{
    try{
        //
        const job = await ModelJob.findByIdAndDelete(req.params.id);

        if(!job) return res.status(404)

    }catch(error){
        next(createError(500, "Failed to delete the job"))
    }
}
