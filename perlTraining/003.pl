#!/usr/bin/perl

use strict;
use warnings;

# Ouverture d'un fichier en mode lecture et écriture
open my $file, '+<', 'file.txt' or die "Impossible d'ouvrir le fichier : $!";

open my $newfile, '>', 'newfile.txt' or die "Impossible de créer le fichier : $!";

# Lecture du contenu du fichier
my @lines = <$file>;

# Modification du contenu du fichier
foreach my $line (@lines) {
  # Remplacement de la chaîne "old" par "new"
  $line =~ s/old/new/g;

  # Ajout d'une chaîne à la fin de chaque ligne
  $line .= " - Modifié par Perl\n";
}

# Écriture du contenu modifié dans le fichier
# seek $file, 0, 0; # Si l'on veut ecrire dans le même fichier pour déplacer le curseur
print $newfile @lines;

# Fermeture du fichier
close $file;
