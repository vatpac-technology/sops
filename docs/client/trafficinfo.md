---
title: Traffic Info
---

--8<-- "includes/abbreviations.md"

## Background
The Traffic Info plugin replicates the Eurocat window of the same name, which helps real world controllers manage the issuance of traffic information to pilots. Traffic pairings can be created between two or more aircraft, providing a place for controllers to record when traffic information is provided to each pilot.

The plugin is targeted towards Terminal and Enroute controllers.

<figure markdown>
![Traffic Info Delete](../controller-skills/img/dtioverview.png){ width="700" }
</figure>

## Installation
The Traffic Info plugin is included in the Australia and Pacific datasets by default. No installation is required.

## Usage
Controllers should create a pairing between two aircraft requiring traffic information as early as possible. This can act as a visual cue to ensure that they don't forget to issue the traffic information to each pilot.

### Create a Pairing
With an aircraft selected, hold the `F7` key and select a second aircraft.

The Traffic Info window will open (if it isn't already) and the traffic pairing will be created. Each individual aircraft is listed, with each relevant aircraft nested below. The callsign of each primary aircraft is coloured depending on their FDR state and owner.

<figure markdown>
![Traffic Info Create](../controller-skills/img/dticreate.png){ width="700" }
</figure>

### Record Traffic Info
Once traffic information has been passed to a pilot, `left click` the nested callsign to change it from white to blue.

To mark traffic information as outstanding (not yet completed), `right click` the nested callsign to change it from blue to white.

<figure markdown>
![Traffic Info Record](../controller-skills/img/dtirecord.png){ width="700" }
    <figcaption>Traffic information on RXA4356 has been provided to QLK270 but the reciprocal information to RXA4356 is still outstanding.</figcaption>
</figure>

### Delete Aircraft
When traffic information is no longer required or relevant, remove the traffic pairing.

`Middle click` the indented aircraft to remove them from the window. Deleting an aircraft will **not** delete the reciprocal pairing (i.e. deleting DEF from ABC **will not** delete ABC from DEF).

<figure markdown>
![Traffic Info Delete](../controller-skills/img/dtidelete.png){ width="600" }
</figure>