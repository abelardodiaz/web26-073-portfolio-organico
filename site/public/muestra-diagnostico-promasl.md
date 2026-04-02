# Diagnostico IA

## PROMASL - Mantenimiento Industrial y Comercial

**Tipo de documento:** Diagnostico Express de Inteligencia Artificial

**Fecha de diagnostico:** 24-25 de marzo, 2026

**Fecha de elaboracion:** 28 de marzo, 2026

**Consultor:** Ing. Abelardo Diaz

**Modalidad:** Visitas presenciales en oficinas y bodega de PROMASL, San Luis Potosi

**Ref:** Muestra de entregable - Folio EJEMPLO-001

---

## Resumen Ejecutivo

PROMASL (Proyectos y Mantenimiento San Luis) es una empresa de mantenimiento industrial y comercial con base en Villa de Pozos, San Luis Potosi. Opera con 12 empleados atendiendo fabricas, naves industriales y comercios en la Zona Industrial, Eje 128 y zona metropolitana. En dos dias de diagnostico con entrevistas a 3 personas clave, se identificaron 6 oportunidades de mejora con inteligencia artificial, de las cuales 2 son implementables de inmediato con impacto directo en flujo de caja. La empresa tiene buena reputacion entre sus clientes pero pierde dinero por ineficiencias administrativas que la IA puede resolver: reportes tardios, cotizaciones lentas, seguimientos olvidados y evidencia fotografica perdida.

---

## Contexto de la Empresa

- **Sector:** Mantenimiento Industrial y Comercial (electrico, electromecanico, HVAC, obra civil menor)
- **Ubicacion:** Villa de Pozos, San Luis Potosi, SLP. Opera en Zona Industrial, Eje 128, zona metropolitana y municipios cercanios
- **Empleados:** 12 (1 director, 1 administradora, 2 supervisores de cuadrilla, 8 tecnicos/operativos)
- **Clientes principales:** Fabricas en Zona Industrial (automotriz, alimentos, logistica), plazas comerciales, restaurantes, oficinas corporativas
- **Competencia directa:** Empresas de mantenimiento con mas personal pero menos especializacion; tecnicos independientes con precios mas bajos

### Infraestructura tecnologica

- **Comunicacion:** WhatsApp Business (canal principal para todo: clientes, tecnicos, fotos, reportes informales)
- **Administracion:** Excel para cotizaciones, control de servicios y listas de refacciones
- **Ordenes de servicio:** Formatos de papel en tabla con clip, llenados a mano en campo
- **Facturacion:** Contador externo con software contable basico
- **Agenda:** Google Calendar parcialmente usado por el director; supervisores coordinan por WhatsApp
- **Almacen:** Inventario en Excel, sin actualizacion en tiempo real

### Atencion al cliente

- **Canal principal:** WhatsApp (70%) + llamadas telefonicas (30%)
- **Quien atiende:** Carmen (administradora) de 8am a 5pm; fuera de horario, el director contesta lo urgente
- **Cotizaciones:** Solo el director sabe calcular precios con precision; Carmen puede dar estimaciones basicas
- **Seguimiento posventa:** No existe proceso formal; depende de que el cliente llame de nuevo

---

## Personas Entrevistadas

### Ing. Roberto Macias - Director y Dueno
**Dia 1 (24 mar), ~2 horas**

Fundador de PROMASL hace 9 anios. Ingeniero electromecanico de la UASLP. Empezo solo y fue creciendo hasta 12 personas. Su mayor frustracion es que el es el cuello de botella de la empresa: solo el sabe cotizar correctamente, solo el aprueba trabajos grandes, y si esta en campo supervisando, los clientes nuevos no reciben respuesta. Trabaja 12 horas diarias y siente que "corre mucho pero no avanza". No conoce con certeza su margen de ganancia real por proyecto. Reconoce que necesita sistematizar pero no sabe por donde empezar. Actitud abierta hacia la tecnologia: usa ChatGPT para redactar correos a clientes grandes.

### Carmen Lopez - Coordinadora Administrativa
**Dia 1 (24 mar), ~50 minutos**

Lleva 4 anios en PROMASL. Es la unica persona administrativa. Se encarga de: contestar WhatsApp y llamadas, agendar servicios, coordinar tecnicos, pedir refacciones, preparar informacion para facturar, y dar seguimiento a cobranza. Su principal dolor: no puede facturar a tiempo porque los tecnicos tardan dias en entregar las hojas de servicio firmadas, o llegan manchadas de grasa e ilegibles. Los clientes industriales (fabricas) requieren evidencia fotografica del "antes y despues" para autorizar pagos, y esas fotos se pierden en grupos de WhatsApp mezcladas con conversaciones personales. Resultado: tarda hasta 15 dias en consolidar la documentacion para facturar un servicio que se completo en 1 dia.

### Luis Torres - Supervisor de Cuadrilla
**Dia 2 (25 mar), ~40 minutos**

8 anios en la empresa, empezo como ayudante. Hoy supervisa una cuadrilla de 4 tecnicos. Excelente tecnico, odia la "talacha" administrativa. Despues de 10 horas reparando un sistema HVAC o soldando estructuras metalicas, lo ultimo que quiere es llenar reportes a mano. Toma fotos del trabajo con su celular, pero se le pierden entre sus fotos personales y las de su familia. Cuando Carmen le pide la evidencia, tiene que buscar entre cientos de fotos. Propone que "deberia haber una forma de mandar la foto y que se archive sola". Usa WhatsApp para todo: reportar avances, pedir refacciones, avisar que termino un servicio.

---

## Oportunidades Detectadas

### PRIORIDAD 1 - Impacto inmediato (Quick Wins)

| # | Oportunidad | Complejidad |
|---|---|---|
| 1 | Generador de reportes de campo por voz | Baja |
| 2 | Asistente de memoria tecnica y evidencia fotografica | Baja-Media |

### PRIORIDAD 2 - Optimizacion de ventas y atencion

| # | Oportunidad | Complejidad |
|---|---|---|
| 3 | Copiloto de pre-cotizaciones | Media |
| 4 | Motor de reactivacion de mantenimientos preventivos | Baja |

### PRIORIDAD 3 - Control operativo avanzado

| # | Oportunidad | Complejidad |
|---|---|---|
| 5 | Conciliacion automatica de horas vs presupuesto | Alta |
| 6 | Check-out fotografico de herramientas | Alta |

---

## Detalle de Oportunidades

### 1. Generador de Reportes de Campo por Voz (via WhatsApp)

**Problema detectado:** Los reportes de servicio se llenan en papel, a mano, despues de jornadas largas. Llegan tardios, ilegibles o incompletos. Esto retrasa la facturacion hasta 15 dias.

**Solucion propuesta:** Un asistente de WhatsApp donde el tecnico, al terminar un servicio, envia un audio describiendo lo que hizo ("Terminamos el clima en nave 3 de BMW, cambiamos banda y filtro, todo operando, duramos 4 horas") y sube 3 fotos. La inteligencia artificial transcribe el audio, corrige la redaccion tecnica, lo acomoda en una plantilla PDF con el formato corporativo de PROMASL, y se lo envia automaticamente a Carmen para que facture el mismo dia.

**Ahorro estimado:** De 15 dias promedio de facturacion a 1-2 dias. Impacto directo en flujo de caja.

**Herramientas:** OpenClaw + WhatsApp Business API + WeasyPrint para PDF

---

### 2. Asistente de Memoria Tecnica y Evidencia Fotografica

**Problema detectado:** Las fotos del "antes y despues" se pierden en grupos de WhatsApp, mezcladas con conversaciones personales. Los clientes industriales exigen evidencia para autorizar pagos. Buscar fotos toma entre 15 y 30 minutos por servicio.

**Solucion propuesta:** Un flujo automatizado donde cualquier foto enviada a un grupo especifico de WhatsApp es analizada por IA (vision artificial), etiquetada automaticamente (ejemplo: "Mantenimiento HVAC - BMW Nave 3 - 24 mar 2026") y guardada ordenadamente en carpetas de Google Drive, organizadas por cliente y fecha.

**Ahorro estimado:** 15-30 minutos por servicio en busqueda de evidencia. Para 40 servicios mensuales: ~15 horas/mes recuperadas.

**Herramientas:** n8n + API de Vision (Google/OpenAI) + Google Drive

---

### 3. Copiloto de Pre-Cotizaciones para el Director

**Problema detectado:** Solo el Ing. Roberto sabe cotizar correctamente. Si esta en campo, los clientes nuevos esperan horas o dias por una cotizacion. En temporada alta, esto significa ventas perdidas.

**Solucion propuesta:** Un asistente entrenado con el historial de cotizaciones en Excel de PROMASL (precios, materiales, tiempos por tipo de servicio). Carmen o el mismo director le escriben: "Cotizame instalacion de 2 minisplits de 2 toneladas en oficina de 80m2 con ductos existentes". La IA devuelve un borrador de cotizacion al instante con precios actualizados. El director solo revisa y aprueba.

**Ahorro estimado:** Tiempo de respuesta de cotizacion de 24-48 horas a menos de 10 minutos. Reduccion estimada de ventas perdidas: 20-30%.

**Herramientas:** Agente custom + base de datos de precios + WhatsApp

---

### 4. Motor de Reactivacion de Mantenimientos Preventivos

**Problema detectado:** PROMASL no hace seguimiento a clientes anteriores. El mantenimiento preventivo (semestral o anual) depende de que el cliente se acuerde y llame. Dinero dejado en la mesa.

**Solucion propuesta:** Un sistema que lee la base de datos de servicios realizados y, cuando se cumple el plazo de mantenimiento preventivo, redacta y envia un mensaje personalizado por WhatsApp: "Hola [Cliente], hace 6 meses hicimos el mantenimiento a su sistema HVAC en [ubicacion]. Es momento de una revision preventiva para evitar fallas en temporada de calor. Le agendo?"

**Ahorro estimado:** Recuperacion de 5-10 servicios preventivos mensuales que actualmente se pierden. Ingreso adicional estimado: $15,000-$40,000 MXN/mes.

**Herramientas:** n8n + WhatsApp Business API + base de datos de servicios

---

### 5. Conciliacion Automatica de Horas vs Presupuesto

**Problema detectado:** El director no sabe si gano o perdio dinero en un proyecto hasta fin de mes, cuando revisa manualmente. Si una cuadrilla se tarda mas de lo presupuestado, nadie se entera hasta que ya es tarde.

**Solucion propuesta:** Un sistema que cruza los reportes de campo diarios (generados con la oportunidad #1) con la cotizacion original. Si la IA detecta que la cuadrilla lleva el 80% de las horas presupuestadas pero el trabajo va a la mitad, envia una alerta al Ing. Roberto para que tome accion antes de que el proyecto sea una perdida.

**Ahorro estimado:** Deteccion temprana de desvios en 2-3 proyectos/mes. Ahorro potencial: $10,000-$25,000 MXN/mes en sobrecostos evitados.

**Herramientas:** Agente custom + integracion con reportes + alertas WhatsApp/Telegram

---

### 6. Check-out Fotografico de Herramientas

**Problema detectado:** Perdida constante de herramientas en las instalaciones de los clientes. Las cuadrillas trabajan en 3-4 ubicaciones por dia y las herramientas se quedan olvidadas. El costo de reposicion no es trivial.

**Solucion propuesta:** Al terminar el turno en cada ubicacion, el supervisor toma una foto a la caja de herramientas abierta. Un modelo de vision por computadora la compara con el inventario base y alerta si falta algun articulo antes de que la camioneta se vaya. Tambien genera un registro historico de uso por herramienta.

**Ahorro estimado:** Reduccion del 60-80% en perdida de herramientas. Ahorro estimado: $3,000-$8,000 MXN/mes.

**Herramientas:** API de Vision + base de datos de inventario + alertas

---

## Recomendacion

Empezar por las **oportunidades 1 y 4** simultaneamente:

- **Oportunidad 1 (Reportes por voz):** Impacto inmediato en flujo de caja. Es el cambio mas visible para Carmen y los tecnicos. Reduce la friccion del equipo con la tecnologia porque usa WhatsApp, que ya conocen.
- **Oportunidad 4 (Reactivacion de preventivos):** Genera ingresos nuevos sin esfuerzo adicional. Es "dinero que ya esta ahi" y que hoy se pierde por falta de seguimiento.

Ambas son de **baja complejidad** y pueden estar operativas en **2-3 semanas**. Una vez funcionando, dan la confianza al equipo para avanzar a las oportunidades 2, 3, y eventualmente 5 y 6.

**Inversion estimada para fase 1 (oportunidades 1 y 4):**
- Implementacion: incluida en paquete de proyecto
- Costos operativos mensuales (APIs, hosting): ~$800-$1,500 MXN/mes
- Soporte y ajustes: retainer mensual

---

## Siguiente Paso

Si el Ing. Roberto decide avanzar, el proceso seria:

1. **Semana 1:** Configuracion del asistente de reportes por voz y pruebas con 1 cuadrilla
2. **Semana 2:** Ajustes basados en retroalimentacion + configuracion del motor de reactivacion
3. **Semana 3:** Lanzamiento completo de ambos sistemas + capacitacion al equipo

Para agendar la implementacion: contacto@abelardodiaz.dev | WhatsApp: 444 174 1629

---

*Diagnostico elaborado a partir de entrevistas presenciales en oficinas y bodega de PROMASL.*
*Costo: $10,000 MXN (bonificable contra primer proyecto en 30 dias).*
*Este documento es una muestra del entregable real que recibes al contratar un Diagnostico Express de IA.*

## Control de versiones

| Version | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 28 de marzo, 2026 | Version inicial |
