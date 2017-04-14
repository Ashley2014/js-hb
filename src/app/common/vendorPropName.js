
let cssPrefixes = [ "Webkit", "Moz", "ms" ];
let emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
export default function vendorPropName( name ) {

  // Shortcut for names that are not vendor prefixed
  if ( name in emptyStyle ) {
    return name;
  }

  // Check for vendor prefixed names
  var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in emptyStyle ) {
      return name;
    }
  }
}


