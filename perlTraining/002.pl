#!/usr/bin/perl

use strict;
use warnings;

# Déclaration de variables
my $nom = "Perl";
my $version = 5.32;
my @languages = ("Perl", "Python", "JavaScript", "C++");
my %age = ( "Perl" => 30, "Python" => 25, "JavaScript" => 20, "C++" => 40 );

# Boucles
print "Liste des languages :\n";
foreach my $lang (@languages) {
  print $lang, "\n";
}

# Instructions conditionnelles
if ( $version >= 5 ) {
  print "La version de $nom est supérieure ou égale à 5.\n";
} else {
  print "La version de $nom est inférieure à 5.\n";
}

# Utilisation de modules externes
use List::Util qw(max);
my $max_age = max(values %age);
print "Le language le plus ancien est $max_age ans.\n";

# Utilisation de la référence de fonction
sub hello {
  my $nom = shift;
  print "Bonjour, $nom !\n";
}
my $nom_fn = \&hello;
$nom_fn->("Perl");

# Utilisation de modules
use DateTime;
my $dt = DateTime->now();
print "Date actuelle : ", $dt->ymd, "\n";

# Utilisation de l'opérateur ternaire
my $result = ( $version > 5 ) ? "Superieur" : "Inférieur";
print "La version de $nom est $result à 5.\n";

