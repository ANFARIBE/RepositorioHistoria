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
            "direccionPaciente": {
                "type": "string",
                "required": true
            },
            "telefonoPaciente": {
                "type": "string",
                "required": true
            },
            "correoPaciente": {
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
            "correoMedico": {
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
                "idEspecialidadMedico": {
                    "type": "string",
                    "required": true
                },
                "nombreEspecialidadMedico": {
                    "type": "String",
                    "required": true
                },
                "codigoEspecialidadMedico": {
                    "type": "String",
                    "required": true
                }
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
        },
        "OrdenExamenes": {
            "idOrdenExamenes": {
                "type": "string",
                "unique": true
            },
            "vigenciaExamenes": {
                "type": "String"
            },
            "resultadosExamenes": {
                "type": "String"
            },
            "Examenes": [{
                "idExamenes": {
                    "type": "string",
                    "unique": true
                },
                "nombreExamen": {
                    "type": "String"
                },
                "codigoExamen": {
                    "type": "String"
                },
                "descripcionExamen": {
                    "type": "String"
                }
            }]
        },
        "OrdenMedicamentos": {
            "idOrdenMedicamentos": {
                "type": "string",
                "unique": true
            },
            "estadoMedicamentos": {
                "type": "string"
            },
            "descripcionMedicamentos": {
                "type": "string"
            },
            "dosisMedicamentos": {
                "type": "string"
            },
            "cantidadMedicamentos": {
                "type": "string"
            },
            "entregasMedicamentos": {
                "type": "string"
            },
            "indicacionesMedicamentos": {
                "type": "string"
            },
            "vigenciaMedicamentos": {
                "type": "string"
            },
            "medicamentos": [{
                "idMedicamentos": {
                    "type": "string"
                },
                "nombreMedicamentos": {
                    "type": "string"
                },
                "descripcionMedicamentos": {
                    "type": "string"
                },
                "codigoMedicamentos": {
                    "type": "string"
                }
            }]
        },
        "OrdenProcedimientos": {
            "idOrdenProcedimientos": {
                "type": "string",
                "unique": true
            },
            "nombreProcedimientos": {
                "type": "string"
            },
            "codigoProcedimientos": {
                "type": "string"
            },
            "descripcionProcedimientos": {
                "type": "string"
            },
            "vigenciaProcedimientos": {
                "type": "string"
            },
            "resultadosProcedimientos": {
                "type": "string"
            }
        },
        "OrdenRemisiones": {
            "idOrdenRemisiones": {
                "type": "string",
                "unique": true
            },
            "nombreRemisiones": {
                "type": "string"
            },
            "codigoRemisiones": {
                "type": "string"
            },
            "motivoRemisiones": {
                "type": "string"
            },
            "especialidadRemisiones": {
                "idEspecialidadRemisiones": {
                    "type": "string"
                },
                "nombreEspecialidadRemisiones": {
                    "type": "String"
                },
                "codigoEspecialidadRemisiones": {
                    "type": "String"
                }
            }
        },
        "OrdenIncapacidades": {
            "idOrdenIncapacidades": {
                "type": "string",
                "unique": true
            },
            "descripcionIncapacidades": {
                "type": "string"
            },
            "fechaInicioIncapacidades": {
                "type": "date"
            },
            "fechaFinIncapacidades": {
                "type": "date"
            }
        }
    
}, {
    collection: "Historias",
    versionKey: false
});

module.exports = mongoose.model("Historias", Historia);