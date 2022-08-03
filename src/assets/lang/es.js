let es = {
    continue:'continuar',
    back:'atras',
    home: 'Inicio',
    more: 'Ver más',
    restOfMyWork: 'Todo mi trabajo',
    darkTheme: 'Diseño oscuro',
    lightTheme: 'Diseño claro',
    facebook: 'Facebook',
    instagram: 'Instagram',
    email: 'Correo electrónico',
    enterApp: 'te estamos llevando a la app',
    leaveApp: 'te estamos llevando de regreso a mi book',
    categories: [
        'UX / UI',
        'Branding',
        'SPM',
    ],
    onboard: {
        welcome:'Bienvenid@',
        welcomeText:'Gracias por tu interés en mi trabajo, antes de empezar, elige tu idioma:',
        role:'Rol',
        roleText:'Cool, ahora dejame saber cual de estas opciones encaja mejor con tu perfil.',
        roleEngine:'ingenieria',
        roleEngineHelp:'Experiencia orientada a código',
        roleDesign:'diseño',
        roleDesignHelp:'Experiencia orientada a diseño e investigación',
        roleRecruit:'recursos humanos',
        roleRecruitHelp:'Experiencia orientada a expectativas y experiencia',
        someRole:'Algún rol',
        name:'Nombre',
        nameText:'De lujo!, una cosa más, ingresa tu nombre.',
        helperNameReady:'¡Listo!',
        helperNameError:'Ingresa un nombre mayor a tres caracteres',
        takeasec:'Esto tomará unos segundos',
        cvdownload:'Si solo necesitas mi cv en pdf puedes descargarlo',
        here:'here',
    },
    mywork: {
        work: 'Mi trabajo',
        moreWork: 'Más trabajo',
        tabsDesign:'Diseño',
        tabsCode:'Código',
        siho: {
            target:'siho',
            category:'UX - UI',
            tab: true,
            img:'https://estebanavon.github.io/av/assets/img/models.jpg',
            software: [
                'Figma',
                'Jquery',
                'Less',
            ],
            design: {
                proyectName: 'UX - UI Sistema SIHO',
                proyectIntro:', take a look on the this small and scaleable Ux process for SIHO, the platform for employees activity registration.',
                info: [
                    {
                        subtitle: 'Encuesta',
                        body: 'Quantitive reasearch and numercial data helps us understand the overall perception of our service.',
                    },
                ],
            },
            code: {
                proyectName: 'UX - UI Código',
                info: [
                    {
                        subtitle: '',
                        buttonLabel: 'Entrar APP de prueba',
                        buttonTarget: '/transition',
                        body: 'Este ejercicio esta basado en los lineamientos de Material Design, desarrollado en React 18.9v y componentes Material UI.',
                        body2: 'Cuando lo desees, puedes regresar a Mi Cv - Resumen.',
                    },
                    {
                        subtitle: 'Repositorio GitHub',
                        body: 'Si lo necesitas puedes darle un vistazon al repositorio de esta app.',
                        link: 'Repositorio GitHub',
                        LinkTarget: 'https://www.facebook.com',
                        
                    },
                ],
            }
        },
        kiosk: {
            target:'kiosk',
            category:'UX - UI',
            tab: true,
            img:'https://estebanavon.github.io/av/assets/img/diaDelLabialMobile.jpg',
            software: [
                'Adobe XD',
                'Jquery',
                'Less',
            ],
            design: {
                proyectName: 'Kidzania Kiosk',
                proyectIntro:', el modulo de autoservicio es el visualmente más interesante del complejo sistema FourZ4 de Kidzania.',
                info: [
                    {
                        subtitle: '¿De qué se trata?',
                        body: 'El Quiosco de KidZania se trata del módulo encargado de la venta de boletos y paquetes de comida para los usuarios. El público meta son los usuarios finales, es decir, los padres de familia visitantes de KidZania en cualquier parte del mundo. Cabe mencionar que la aplicación es multi-idioma, multimoneda y multiplataforma.',
                    },
                    {
                        subtitle: 'Color',
                        body: 'La cromática se alinea a la comunicación externa de KidZania, ya que es un flujo en contacto con el usuario final, se eligió la cromática primaria del brandbook de KidZania.',
                        body2: 'Se logró alternar coherentemente entre los dintintos fondos de color en cada pantalla o paso del proceso, tanto para agregar atractivo visual como para indicar el progreso positivo de la compra.',
                    },
                    {
                        subtitle: 'Retícula fija',
                        body: 'Consiste en una pantalla diseñada para monitores táctiles verticales a gran tamaño, aunque la aplicación es web no fue necesaria una adaptabilidad a dispositivos móviles.',
                    },
                    {
                        subtitle: 'Botones',
                        body: 'Los colores alternan entre un color primario y secundario, esto ayuda al usuario a relacionar acciones negativas o retroceso y diferenciarlas de positivas o de progreso. Se utilizaron los colores principales los botones, dejando colores terciarios para botones menos importantes en el flujo (por ejemplo los tabs).',
                        body2: 'El posicionamiento y tamaño de los "call to action" es clave para la navegación del usuario.',
                    },
                    {
                        subtitle: 'Flujo',
                        body: 'La venta automatizada de boletos y paquetes de comida consiste en elegir fechas, horarios, reservaciones, etc, con el quiosco puedes lograr todo esto por ti mismo.',
                        body2: 'Utilizamos Adobe XD para concretar ideas y probar con usuarios, con su retroalimnetación logramos reducir el tiempo de análisis y diseño desarrollar código lo más pronto posible.',
                    },
                    {
                        subtitle: 'Tipografía',
                        body: 'La tipografía para todo el sistema es Ubuntu, es una familia muy completa con varios pesos tipográficos',
                    },
                    {
                        subtitle: 'Iconografía',
                        body: 'Una retícula sencilla permitió diseñar y personalizar 150 iconos de manera consistente, simple y clara.',
                        body2: 'Los inconos son ocupados, tanto para reducir espacio en la interfaz gráfica como para agregar jerarquía a algún elemento. Se requirió de un esfuerzo imporante por mantener la semántica.',
                    },
                ],
            },
            code: {
                proyectName: 'Kiosk código',
                proyectIntro:', este código es propiedad de Kidzania, aquí describo un poco de los retos técnicos a los que me enfrenté',
                info: [
                    {
                        subtitle: 'Colores',
                        body: 'Necesitabamos una paleta reutilizable, por lo cual utilizamos el preprocesador Less',
                    },
                    {
                        subtitle: 'Retícula fija',
                        body: 'El quiosco de autoservicion de Kidzania está pensado para dispositivos de gran tamaño, la realización de columnas flexibles no fue necesaria.',
                    },
                    {
                        subtitle: 'Iconografía',
                        body: 'Los iconos personalizados se renderizan en el navegador através de archivos .ttf y .css.',
                    },
                ],
            }
        },
        anew: {
            target:'anew',
            category:'UX - UI',
            tab: true,
            img:'https://estebanavon.github.io/av/assets/img/diaDelLabialMobile.jpg',
            software: [
                'Invision',
                'Jquery',
                'Sass',
            ],
            design: {
                proyectName: 'Anew Landing Page',
                proyectIntro:', el sitio Anew es para promoción y difusión de los productos antiedad de Avon en los mercados Mexico, Guatemala, Honduras, Panama, El Salvador y Rep. Dominicana.',
                info: [
                    {
                        subtitle: 'Sobre el proyecto',
                        body: 'Anew es la marca antiedad más vendida de Avon, todos sus productos y cualidades se encuentran en este sitio.',
                    },
                    {
                        subtitle: 'Color',
                        body: 'La paleta de colores es consistente con el sistema de Avon y su comunicación externa. Los colores del sistema estan expresados en botones y controles.',
                    },
                    {
                        subtitle: 'Tipografía',
                        body: 'El sistema de Avon ocupa la ya conocida familia tipográfica Montserrat.',
                    },

                ],
            },
            code: {
                proyectName: 'Landing Page Código',
                info: [
                    {
                        link: 'Visitar el sitio',
                        LinkTarget: 'https://estebanavon.github.io/av/assets/html/anew.html',
                    },
                    {
                        subtitle: 'Librerias',
                        body: 'Se ocuparon estilos personalizados, Bootstrap 4.6, Jquery y Scroll Magic.',
                    },
                    {
                        subtitle: 'Propósito',
                        body: 'Es un desarrollo simple de front end, solo para fines de despliege de información.',
                    },

                ],
            }
        },
        sucream: {
            target:'sucream',
            category:'Branding',
            tab: false,
            img:'https://estebanavon.github.io/av/assets/img/conoce-avon/ca-products-3b.jpg',
            software: [
                'Adobe Ai',
                'Adobe Ps',
                'Strata 3d',
            ],
            design: {
                proyectName: 'Sucream',
                info: [
                    {
                        subtitle: 'Concepto',
                        body: 'Se trata de una marca de caramelo suave con leche tipo nucita o duvalin. Fue diseñado con el propósito de competir contra estas grandes marcas, por lo tanto, fue necesario un lettering y una ilustración coherente al público meta.',
                    },
                    {
                        subtitle: 'Público meta',
                        body: 'El público meta está en cierta medida condicionado a un estilo visual marcado por la competencia, el reto de diseño visual consiste en mantenerse dentro estos parámteros y lograr una identidad única y distinta.',
                    },
                ]

            },
        },
        dentalist: {
            target:'dentalist',
            category:'Branding',
            tab: false,
            img:'https://estebanavon.github.io/av/assets/img/conoce-avon/ca-products-3b.jpg',
            software: [
                'Adobe Ai',
                'Adobe Ps',
            ],
            design: {
                proyectName: 'Dentalist',
                info:[
                    {
                        subtitle: 'Problemática',
                        body: 'Es un consultorio que integra distintas especialidades odontológicas.',
                        img:'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: 'Público meta',
                        body: 'El concepto se basa en una atención distinta, personal e íntima al paciente, como diferenciador en un competido mercado. La marca se posiciona a través de un concepto empático y centrado en el usuario, mismo que se ve reflejado en toda la comunicación interna y externa.',      
                        img:'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: 'Aplicaciones',
                        body: 'Se requirió del diseño de papelería, señalización y anuncios.',
                    },
                ],
            },
        },
        smonkeys: {
            target:'smonkeys',
            category:'Branding',
            tab: false,
            img:'https://estebanavon.github.io/av/assets/img/conoce-avon/ca-products-3b.jpg',
            software: [
                'Adobe Ai',
                'Adobe Ps',
            ],
            design: {
                proyectName: 'Smonkeys',
                info:[
                    {
                        subtitle: 'Problemática',
                        body: 'Es un consultorio que integra distintas especialidades odontológicas.',
                        img:'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: 'Público meta',
                        body: 'El concepto se basa en una atención distinta, personal e íntima al paciente, como diferenciador en un competido mercado. La marca se posiciona a través de un concepto empático y centrado en el usuario, mismo que se ve reflejado en toda la comunicación interna y externa.',      
                        img:'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: 'Aplicaciones',
                        body: 'Se requirió del diseño de papelería, señalización y anuncios.',
                    },
                ],
            },
        },
        employCode: {
            target:'employees-code',
            category:'Comunication',
            tab: false,
            img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
            software: [
                'Adobe Ai',
                'Adobe Ps',
            ],
            design: {
                proyectName: 'Código de conducta',
                info: [
                    {
                        subtitle: '¿De que se trata?',
                        body: 'El Programa de Cultura Institucional del Sepomex dicta la difusión de los valores institucionales anualmente.',
                        img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: 'Aplicaciones',
                        body: 'Para realizar el proyecto se requierió de 8 ilustraciones y un diseño homólogo para los comunicados. El alcance es nacional (más de 8,000 empleados) en tres distintas modalidades: a través del correo electrónico (comunicación interna); impresión al reverso del recibo de nómina quincenal; y como fondo de pantalla para los monitores de la Institución.',
                        img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                ],
            },
        },
        orange: {
            target:'orange',
            category:'Comunication',
            tab: false,
            img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
            software: [
                'Adobe Ai',
                'Adobe Ps',
            ],
            design: {
                proyectName: 'Pinta tu mundo de naranja',
                info: [
                    {
                        subtitle: 'Concepto',
                        body: 'El Servicio Postal Mexicano, participa en la campaña del Secretario General de la ONU: “Únete para poner fin a la violencia contra las mujeres y las niñas“ publicando, a través de correo electrónico, carteles informativos sobre la violencia de género.',
                        img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                    {
                        subtitle: '¿De que se trata?',
                        body: 'El proyecto consiste en investigación, síntesis y jerarquización de la información, además, 12 ilustraciones y composiciónes de diseño para los comunicados.',
                        img: 'https://estebanavon.github.io/av/assets/img/anew/bannerPowerSerumMain.jpg',
                    },
                ],
            },
        },

    },
    homeText: {
        titles: 'Diseñador Ux / Ui',
        titles2: 'Desarrollador front end web',
        location: 'Actualmente vivo en la Ciudad de México',
        resume: 'Mi Cv - Resumen.',
        downloadCv: 'Descargar Cv en pdf',
        sendEmail: 'Enviarme un email',
        sendWa: 'Enviarme un Whats App',
        restart:'Reiniciar experiencia',
        devinfo:{
            title: 'Habilidades de desarrollo',
            bullets: [
                'Front end / Diseño y desarrollo Responsivo',
                'HTML 5, CSS 3, LESS, SASS',
                'Bootstrap 4',
                'Javascript, JSX, JQuery',
                'React, Material UI',
                'GitHub',
            ],
            button: true,
            label:'Poyecto Siho Ux/Ui',
            target:'/home/w/siho'
        },
        designinfo: {
            title: 'Diseño',
            bullets: [
                'Investigación de datos cualitativos y cuantitativos',
                'User personas',
                'Pruebas de usuario',
                'Wireframes y prototipos',
                'Diseño de flujos',
                'Diseño de interacción',
                'Diseño según Material Design',
                'Diseño UI',
                'Diseño responsivo',
            ],
            button: false,
            external: false,
            label:'FIGMA PROTOTYPE',
            target:'https://www.figma.com/proto/y5zJtFks36abZwEnp4RAxH/Portfolio-Prototype?page-id=0%3A1&node-id=2%3A25&viewport=678%2C266%2C0.02&scaling=scale-down&starting-point-node-id=2%3A25',
        },
        softwareinfo: {
            title: 'Software',
            bullets: [
                'Visual Studio Code',
                'Adobe XD, Figma, Invision',
                'Adobe Illustrator',
                'Adobe Photoshop',
                'Adobe Indesign',
                'Microsoft Word, Outlook y Powerpoint',
                'Strata Design 3D SE',
                'Wings 3D',
                'FontLab Studio',
            ],
            button: true,
            external: true,
            label:'prototipo figma',
            target:'https://www.figma.com/proto/y5zJtFks36abZwEnp4RAxH/Portfolio-Prototype?page-id=0%3A1&node-id=2%3A25&viewport=678%2C266%2C0.02&scaling=scale-down&starting-point-node-id=2%3A25',
        },
        experienceinfo: {
            title: 'Experiencia profesional',
            bullets: [
                'MARZO 2020 - JULIO 2022 Avon en los mercados Norte de America Latina, Diseñador UX - UI, (Diseño / desarrollo de interfaces gráficas de usuario, y páginas de aterrizaje para marketing. Testeador y supervisor de estilos.)',
                'ABRIL 2018 - FEBRERO 2020 23 meses como Diseñador UX - UI en Praxis (Diseño y estándares de Interfaces gráficas de usuario; Desarrollo front end incluyendo código Jquery y Typescript) trabajamos clientes como KidZania y Mapfre.',
                'MAYO 2017 - MARZO 2018  10 meses como Diseñador Jr para el Servicio Postal Mexicano (Desarrollo de campañas digitales difundidas através de la Comunicacioón Interna a escala nacional).',
            ],
            button: false,
            label:'FIGMA PROTOTYPE',
            target:'/home/w/siho'
        },
        academyinfo: {
            title: 'Academia',
            bullets: [
                'Licenciatura en la Facultad de Artes y Diseño de la UNAM',
                '3 años de escuela primaria en EEUU',
                'Curso Human Centered Desgin y Human Centered Desgin:Prototype impartido por +Acumen',
                'Curso UX Introduction, User Needs assements y UX Fudamentals por edx.org y coursera.com',
            ],
            button: false,
            label:'FIGMA PROTOTYPE',
            target:'/home/w/siho'
        },
        aboutme: {
            title: 'Sobre mi',
            bullets: [
                'Email: ecazaresc@yahoo.com.mx',
                'Cel: 55 4938 6144',
                'Actualmente vivo en Col. Portales Oriente, CDMX',
            ],
            button: false,
            label:'FIGMA PROTOTYPE',
            target:'/home/w/siho'
        },
    },
}
export function GetEs(){
    return es
}