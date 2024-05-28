const mongoose = require("../DB/ConectionDB");

const Historia = mongoose.Schema({
    "codigoHistoria": {
        "type": "string",
        "unique": true,
        "required": true
    },
    "motivo": {
        "type": "string",
        "required": true
    },
    "antecendentes": {
        "type": "string",
        "required": true
    },
    "temperatura": {
        "type": "string",
        "required": true
    },
    "peso": {
        "type": "string",
        "required": true
    },
    "altura": {
        "type": "string",
        "required": true
    },
    "presionAlterial": {
        "type": "string",
        "required": true
    },
    "diagnostico": {
        "type": "string",
        "required": true
    },
    "valoracion": {
        "type": "string",
        "required": true
    },
    "tipoConsulta": {
        "type": "string",
        "required": true
    },
    "paciente": {
        "idPaciente": {
            "type": "string",
            "required": true
        },
        "nombresPaciente": {
            "type": "string",
            "required": true
        },
        "apellidosPaciente": {
            "type": "string",
            "required": true
        },
        "tipoDocumentoPaciente": {
            "type": "string",
            "required": true
        },
        "documentoPaciente": {
            "type": "string",
            "required": true
        },
        "estadoPaciente": {
            "type": "string",
            "required": true
        }
    },
    "medico": {
        "idMedico": {
            "type": "string",
            "required": true
        },
        "nombresMedico": {
            "type": "string",
            "required": true
        },
        "apellidosMedico": {
            "type": "string",
            "required": true
        },
        "tipoDocumentoMedico": {
            "type": "string",
            "required": true
        },
        "documentoMedico": {
            "type": "string",
            "required": true
        },
        "estadoMedico": {
            "type": "string",
            "required": true
        },
        "especialidadMedico": {
            "type": "string",
            "required": true
        }
    },
    "cita": {
        "idCita": {
            "type": "string",
            "required": true
        },
        "tipoCita": {
            "type": "string",
            "required": true
        },
        "estadoCita": {
            "type": "string",
            "required": true
        },
        "fechaAgenda": { //se obtiene de la agenda
            "type": "date",
            "required": true
        },
        "horaAgenda": { //se obtiene de la agenda
            "type": "String",
            "required": true
        }
    }
}, {
    collection: "Historias",
    versionKey: false
});

module.exports = mongoose.model("Historias", Historia);