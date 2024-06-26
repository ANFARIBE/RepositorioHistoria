//const { request } = require("express");
const express = require("express");
const Historia = require("../models/Historia");
const HistoriaRouter = express.Router();

//buscarTobhdasHistoria
HistoriaRouter.get("/GetAll", (req, res) => {
    Historia.find()
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//Guardar historia nueva
HistoriaRouter.post("/Create", (req, res) => {
    const historia = new Historia({
        idHistorias: req.body.idHistorias,
        codigoHistoria: req.body.codigoHistoria,
        motivo: req.body.motivo,
        antecendentes: req.body.antecendentes,
        temperatura: req.body.temperatura,
        peso: req.body.peso,
        altura: req.body.altura,
        presionAlterial: req.body.presionAlterial,
        diagnostico: req.body.diagnostico,
        valoracion: req.body.valoracion,
        tipoConsulta: req.body.tipoConsulta,
        paciente: req.body.paciente,
        medico: req.body.medico,
        cita: req.body.cita
    });

    historia.save()
        .then((datos) => res.status(202).json(datos))
        .catch((error) => res.status(505).json({ mensaje: error }));
});

//EliminarHistoria
HistoriaRouter.delete("/Delete/:id", (req, res) => {
    Historia.deleteOne({ _id: req.params.id })
        .then((datos) => res.status(202).json(datos))
        .catch((error) => res.status(505).json({ mensaje: error }));
});

//ActualizarHistoria
HistoriaRouter.patch("/Update/:id", (req, res) => {
    Historia.updateOne(
        { _id: req.params.id },
        {
            $set: {
                idHistorias: req.body.idHistorias,
                codigoHistoria: req.body.codigoHistoria,
                motivo: req.body.motivo,
                antecendentes: req.body.antecendentes,
                temperatura: req.body.temperatura,
                peso: req.body.peso,
                altura: req.body.altura,
                presionAlterial: req.body.presionAlterial,
                diagnostico: req.body.diagnostico,
                valoracion: req.body.valoracion,
                tipoConsulta: req.body.tipoConsulta,
                paciente: req.body.paciente,
                medico: req.body.medico,
                cita: req.body.cita
            },
        }
    )
        .then((datos) => {
            if (datos) {
                res.status(202).json(datos)
            }else{
                res.status(404).json({ mensaje: "No se Actualizo" });
            }
        })            
        .catch((error) => res.status(505).json({ mensaje: error }));
});

//BuscarIdHistoria
HistoriaRouter.post("/SearchByHistoriaId/", (req, res) => {

    const idHistoria = req.body.idHistoria;
    
    if (!idHistoria) {
        return res.status(405).json({ mensaje: "El campo 'idHistoria' es requerido" });
    }

    Historia.findById(idHistoria)
        .then(datos => {
            if (datos) {
                res.status(202).json({ historia: datos });
            } else {
                res.status(405).json({ mensaje: "Historia no encontrada" });
            }
        })
        .catch(error => {
            res.status(505).json({ mensaje: error.message });
        });
});

//BuscarCodigoHistoria
HistoriaRouter.post("/SearchByCodigoHistoria/", (req, res) => {
    var filtro = {
        codigoHistoria: req.body.codigoHistoria,
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//BuscarTipoConsulta
HistoriaRouter.post("/SearchByTipoConsulta/", (req, res) => {
    var filtro = {
        tipoConsulta: req.body.tipoConsulta
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//BuscarPacienteDocumento
HistoriaRouter.post("/SearchByDocumentoPaciente/", (req, res) => {
    var filtro = {
        'paciente.documentoPaciente': req.body.paciente.documentoPaciente
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//BuscarPacienteNombre
HistoriaRouter.post("/SearchByNombrePaciente/", (req, res) => {
    var filtro = {
        'paciente.nombrePaciente': req.body.medico.nombrePaciente
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//BuscarMedicoDocumento
HistoriaRouter.post("/SearchByDocumentoMedico/", (req, res) => {
    var filtro = {
        'medico.documentoMedico': req.body.medico.documentoMedico
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//BuscarMedicoNombre
HistoriaRouter.post("/SearchByNombreMedico/", (req, res) => {
    var filtro = {
        'medico.nombreMedico': req.body.nombreMedico
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//Buscar historia por Nombre Especialidad
HistoriaRouter.post("/SearchByEspecialidad/", (req, res) => {
    var filtro = {
        'medico.especialidadMedico.nombreEspecialidadMedico': req.body.medico.especialidadMedico.nombreEspecialidadMedico
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});

//Buscar historia por id Cita
HistoriaRouter.post("/SearchByIdCita/", (req, res) => {
    var filtro = {
        'cita.idCita': req.body.cita.idCita
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});


//BuscarAntecendentesOrdenada
HistoriaRouter.post("/Buscar/Fecha/", (req, res) => {
    var filtro = {
        'cita.fechaAgenda': req.body.cita.fechaAgenda
    };

    Historia.find(filtro)
        .then(datos => res.status(202).json({ historia: datos }))
        .catch(error => res.status(505).json({ mensaje: error }));
});


module.exports = HistoriaRouter;