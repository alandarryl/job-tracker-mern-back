const createError = require('../middlewares/error');
const ModelJob = require('../models/job.model');

const getAll = async (req,res, next) =>{
    try{
        //
        const jobs = await ModelJob.find();

        if(!jobs) return res.status(404).json("Jobs not found");

        res.status(200).json(jobs)

    }catch(error){
        //
        next(createError(500, error.message))
    }
};

const getOne = async (req, res, next) =>{
    try{
        //
        const job = await ModelJob.findById(req.params.id);
        if(!job) return res.status(404).json("Job not found");

        res.status(200).json(job)
    }catch(error){
        next(createError(500, "Failed to get that one job"))
    }
};

const sortRecentEnterJob = async (req, res, next) =>{
    try {
        //
    } catch (error) {
        //
    }
};



const enterJob = async (res, req, next) =>{
    try{
        //

        const job = await ModelJob.create(req.body);
        res.status(201).json(job);

    }catch(error){
        //
        next(createError(500, "Failed enter job"))
    }
}

const deleteEnterJob = async (res, req, next) =>{
    try{
        //
        const job = await ModelJob.findByIdAndDelete(req.params.id);

        if(!job) return res.status(404).json('Job not found');

        res.status(200).json("Job deleted");

    }catch(error){
        next(createError(500, "Failed to delete the job"))
    }
}

const updateEnterJob = async (res, req, next) =>{
    try{
        //
        const job = await ModelJob.findByIdAndUpdate(req.params.id,
            req.body,
            {new: true}
        );

        if(!job) return res.status(404).json("Job not found");

        res.status(200).json(job)

    }catch(error){
        next(createError(500, "Failed to update the job"));
    }
}


module.exports ={
    getAll,
    getOne,
    updateEnterJob,
    deleteEnterJob,
    enterJob
};
