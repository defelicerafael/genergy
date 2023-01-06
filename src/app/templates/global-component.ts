export interface Nav{
    'nav':string;
    'angularRouteBoolean':string;
    'angularRoute':string;
    'url':string;
    'scrollBoolean':boolean;
}

export interface Clientes{
    'img':string;
    'orden':number;
    'alt':string;
}

export class GlobalComponent {
 
    public static navItems: Nav[] = [
        {
            'nav':'Quienes Somos',
            'angularRouteBoolean':'scroll',
            'angularRoute':'/servicios/emprendedores',
            'url':'quienesomos',
            'scrollBoolean':true
        },
        {
            'nav':'Nuestra misión',
            'angularRouteBoolean':'scroll',
            'angularRoute':'/servicios/farma',
            'url':'mision',
            'scrollBoolean':true
        },
        {
            'nav':'Tecnología',
            'angularRouteBoolean':'scroll',
            'angularRoute':'/servicios/ecommerce',
            'url':'tecnologia',
            'scrollBoolean':true
        },
        {
            'nav':'Contacto',
            'angularRouteBoolean':'scroll',
            'angularRoute':'',
            'url':'contacto',
            'scrollBoolean':true
        }
    ];

    public static clientes:Clientes[] = []; 
}