const Event = require("../models/event.models");
const User = require("../models/user.models");


// todos los eventos
module.exports.all_event = (req, res) => {
    console.log("entré");
    Event.find()
        .then(events => {res.json(events)
        console.log(events);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

// el usuario y el evento
module.exports.get_event = (req, res) => {
    User.findOne({_id:req.params.id}).populate("events")
        .then(events => res.json(events))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);})
        };

//crear evento
module.exports.create_event = (req, res) => {
    Event.create(req.body)
        .then(newevent => res.json(newevent))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

// ingresar los eventos al usuario
module.exports.update_event = (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, {$push: { events: req.body.questions}  })
        .then(userandevent =>{ 
            console.log(userandevent);
            res.json(userandevent)})
        .catch(err => {res.status(400).json(err);});
}

// borrar el evento
module.exports.delete_event = (req, res) => {
    Event.deleteOne({_id: req.params.id})
        .then(events => res.json(events))
        .catch(err => {res.status(400).json(err);});
}

// // crear pregunta
// module.exports.create_question = (req, res) => {
//     Question.create(req.body)
//         .then(question => res.json(question))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         });
// }

// module.exports.delete_question = (req, res) => {
//     Question.deleteOne({_id: req.params.id})
//         .then(question => res.json(question))
//         .catch(err => {res.status(400).json(err);});
// }


// module.exports.update_question = (req, res) => {
//     Question.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
//         .then(questions => res.json(questions))
//         .catch(err => {res.status(400).json(err);});
// }

// module.exports.get_question = (req, res) => {
//     Question.findOne({_id:req.params.id})
//         .then(question => res.json(question))
//         .catch(err => {res.status(400).json(err);});
// }

