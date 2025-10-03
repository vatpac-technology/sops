---
title: Ground Delay Management
---

--8<-- "includes/abbreviations.md"

## Overview
Managing the flow of traffic is not just limited to [sequencing](sequencing.md) in the air! Flow Management techniques can be applied to aircraft on the ground to minimise delays in the air and reduce congestion.

In real life, pilots, airlines and controllers rely on Airport Collaborative Decision Making (A-CDM) to coordinate and plan aircraft movements across the country, and there are multiple dedicated flow controllers and operations analysts to ensure efficiency on a daily basis. On VATSIM we can apply several techniques to implement better management of ground delay at an aerodrome, reduce knock-on airborne delays, reduce aerodrome congestion, and keep pilots better in the loop.

These techniques include utilising A-CDM procedures, pushback management, and ad-hoc ground stops.

## Airport Collaborative Decision Making
The OzStrips plugin has been expanded to include an [A-CDM mode](../client/towerstrips.md#a-cdm), that can be used when traffic levels warrant. This feature imitates real life A-CDM processes to a degree, but on the network allow controllers to more easily visualise and manage overall aerodrome traffic levels, provide TSAT and CTOT information to pilots, and achieve planned departure rates at an aerodrome. It can be used without, and in conjunction with some of the other flow management techniques below.

!!! note
    It is beneficial to have an understanding of how CDM works, before utilising it as a controller. Further information can be found on the [CDM section within Tower Strips](../client/towerstrips.md#a-cdm).

### Implementing the Procedure
Activating A-CDM mode can be done by toggling it active, from the **Settings** drop down list, within the OzStrips plugin. You can tell the mode has been activated successfully when you see the Departure Monitor appear in the **Runway Bay**.

<figure markdown>
![Departure Monitor](../controller-skills/img/ozstripsdepmonitor.png){ width="300" }
    <figcaption>The Departure Monitor.</figcaption>
</figure>

Coordination should be affected with other aerodrome controllers, and the **FMP** controller if present. 

!!! phraseology
    <span class="hotline">**SY SMC** -> **SY ADC**</span>: "There are a few aircraft awaiting pushback, should we enable A-CDM?"  
    <span class="hotline">**SY ADC** -> **SY SMC**</span>: "Affirm, let's set a departure rate of 30."  
    <span class="hotline">**SY SMC** -> **SY ADC**</span>: "Roger, I'll send it within the Controller Messages chat as well."  

Later, the set departure rate may need to be varied based on traffic flow conditions within the network.

!!! phraseology
    <span class="hotline">**ML FMP** -> **SY FMP**</span>: "Due to the amount of arrivals into ML, departures are backing up. Can we reduce the SY departure rate?"  
    <span class="hotline">**SY FMP** -> **ML FMP**</span>: "Affirm, with your concurrence, we'll move from a departure rate of 30 to 24. I'll tell Coordinator."  
    <span class="hotline">**ML FMP** -> **SY FMP**</span>: "Concur 24, thanks."


### Processing each Aircraft
To effectively operate with A-CDM procedures:

1. When an aircraft requests pushback, they should be placed into the **Cleared Bay** below the default OzStrips queue bar.
    
    An TSAT and CTOT will be generated for them, which can be provided to the pilot. This will be presented within the strip `Time Field`, and will appear with a grey background.

    <figure markdown>
    ![Queued Strip](../controller-skills/img/ozstripscdmqueue.png){ width="500" }
        <figcaption>A queued strip, with a TSAT of 03:52z.</figcaption>
    </figure>

2. When the current time is within 1 minute of the TSAT, the `Time Field` within the strip will go green. The **SMC** controller should approve pushback when able.
    
    If, due to apron congestion or similiar, the aircraft first in line can't be pushed, or is AFK, the **SMC** controller may push another aircraft, taking into account relative priority.

    After moving the strip into the **Pushback Bay**, the `Time Field` will go yellow.

3. **ADC** should allow aircraft to depart, such that the overall departure rate is maintained.
    
    After each aircraft becomes airborne, their departure is logged, and the Departure Monitor is incremented.

    <figure markdown>
    ![Departure Monitor](../controller-skills/img/ozstripsdepmonitor.png){ width="300" }
        <figcaption>The Departure Monitor.</figcaption>
    </figure>

    The **ADC** controller should endeavour to ensure that they monitor actual vs planned departure rates, to avoid saturating down the line approach and enroute sectors. A technique to maintain the departure rate can include using the [OzStrips Take-Off Timer](../client/towerstrips.md#strips), and waiting until `60 minutes / Departure Rate` minutes have elapsed.

    !!! example
        The **Departure Rate** is 20. There should be `60 / 20` minutes between departures, or 3 minutes.

### Website
When CDM is enabled at an aerodrome, pilots and controllers can view the [Departure Queue online](https://vats.im/pac/cdm). This may be beneficial for Enroute and Approach controllers not using the OzStrips plugin, or with visibility centres not close to the aerodrome of interest.

<figure markdown>
![CDM Website](../controller-skills/img/ozstripscdmladder.png){ width="800" }
    <figcaption>The ladder visible on the CDM Website.</figcaption>
</figure>

## Pushback Requests on ACD
During busy events, such as [Milk Run Monday](../../events/milkrun/), the **SMC** controller may end up with a much higher workload than the **ACD** controller. To mitigate this, some airports have local SOPs that allow for pushback requests to be done on **ACD** frequency, to balance the workload. 

!!! warning "Important"
    The 'Pushback Requests on ACD' procedure is currently limited to [Brisbane](../aerodromes/classc/Brisbane.md#pushback-requests-on-acd), [Melbourne](../aerodromes/classc/Melbourne.md#pushback-requests-on-acd), [Perth](../aerodromes/classc/Perth.md#pushback-requests-on-acd), and [Sydney](../aerodromes/classc/Sydney.md#sydney-coordinator).

At Sydney, the role of **ACD** in the procedure listed below is performed by a dedicated controller, named [Sydney Coordinator](../aerodromes/classc/Sydney.md#sydney-coordinator). Where a separate Coordinator controller is not online, the role may be performed by ACD instead.

### Implementing the Procedure
!!! note
    This procedure is relevant to pushback requests on ACD and the use of Sydney Coordinator. When Sydney Coordinator is active, replace all references to **ACD** below with **Coordinator**.

To commence the procedure:

1. **SMC** and **ACD** coordinate to implement the procedure, due to high **SMC** workload.
2. **SMC** coordinates with **ADC** in order to have the ATIS updated (see each aerodrome's page).
3. **ACD** places the `STANDBY FOR GROUND` bar in the **Cleared Bay** in [OzStrips](../client/towerstrips.md#coordinator).

!!! phraseology
    <span class="hotline">**ML SMC** -> **ML ACD**</span>: "It's getting quite busy. Happy to implement Pushback requests on your frequency?"  
    <span class="hotline">**ML ACD** -> **ML SMC**</span>: "Understood, affirm"  
    <span class="hotline">**ML SMC** -> **ML ACD**</span>: "Thanks, I'll talk to Tower"  

    <span class="hotline">**ML SMC** -> **ML ADC**</span>: "Can we please get `ALL DEPARTURES MUST REQUEST PUSH BACK ON 127.2` on the ATIS?"  
    <span class="hotline">**ML ADC** -> **ML SMC**</span>: "Wilco"  

### Processing each Aircraft
To operate with pushback requests on ACD:

1. When **ACD** has finished issuing an airways clearance, they will **remind** pilots to *"Contact me when ready for pushback/taxi"*.
2. When a pilot requests pushback, **ACD** will assess their priority based on apron congestion and number of aircraft in the queue (see [Queue Management](#queue-management)).  
3. **ACD** will either instruct them to **standby for Ground** *(not contact)*, or remain on the ACD frequency if a delay is required.  
4. If an aircraft is instructed to 'standby for Ground', **ACD** will move the strip below the **Standby for Ground** bar in the **Queue** section of the **Cleared Bay** in [OzStrips](../client/towerstrips.md#coordinator), to denote they are awaiting pushback approval.  
5. When **SMC** has adequate space on the aprons, taxiways, and holding points, they will issue pushback/taxi to the next aircraft in line by scanning the [Cleared Queue bay](../client/towerstrips/#stripboard).

The decision whether or not to send an aircraft to SMC or hold them on the ACD frequency should be made in accordance with the [Queue Management](#queue-management) techniques.

!!! warning "Important"
    If SMC needs to reduce the pushback rate due to congestion at the holding points or excessive workload, **ACD** should be informed without delay, and instructed to hold all departures on their frequency. This will stop aircraft being told to 'standby for ground' on the SMC frequency. Remember to cancel this requirement when congestion eases.

!!! phraseology
    **VOZ543:** "Melbourne Delivery, VOZ543, PDC read back"  
    **ML ACD:** "VOZ543, Melbourne Delivery"  
    **VOZ543:** "DOSEL2 departure, squawk 1336, bay E8, VOZ543"  
    **ML ACD:** "VOZ543, contact me when ready for pushback"  
    **VOZ543:** "Wilco, VOZ543"  
    ...   
    **VOZ543:** "Melbourne Delivery, VOZ543, bay E8, request pushback"  
    **ML ACD:** "VOZ543, standby for ground 121.7"  
    **VOZ543:** "Standby for ground 121.7, VOZ543"  
    ...   
    **ML SMC:** "VOZ543, Melbourne Ground, pushback approved."

When a separate Sydney Coordinator controller is online, pilots should be instructed to contact that controller after reading their airways clearance back.

!!! tip
    If an aircraft is instructed to standby for ground but there is still a small delay expected on SMC (i.e. busy event or taxiway congestion), it may be beneficial to inform the pilot to prevent them from *contacting* SMC.

    E.g. *"VOZ543, it's quite busy at the moment, standby for ground 121.7, they'll get to you when they can"*

If a delay is required prior to transferring an aircraft to SMC, provide an estimated delay value to the pilot or advise them of their position in the queue.

!!! phraseology
    **VOZ543:** "Melbourne Delivery, VOZ543, bay E8, request pushback"  
    **ML ACD:** "VOZ543, estimated delay 10 minutes, remain this frequency."

!!! tip
    Remember that the **bottom** aircraft represents the **front** of the queue.

### Queue Management
To reduce SMC workload, ACD should not allow more than **three** aircraft to be awaiting pushback or taxi on the SMC frequency. When three aircraft are already queued on the SMC frequency, any additional aircraft should be told to remain on the ACD frequency and informed of their position in the queue or approximate delay (if known). These aircraft should be placed in the **Cleared Bay Queue**, above the **Standby for Ground** bar.

<figure markdown>
![ACD Ops with OzStrips](img/ozstripscoordinator.png){ width="800" }
  <figcaption>Pushback Requests on ACD Ops with OzStrips<br><small>Three aircraft are waiting on the SMC frequency (below the Queue bar), and QFA121 and RXA6416 have both requested push/taxi but are being held on the ACD frequency. QFA121 is closer to the bottom, so will be next to be told to standby for SMC.</small></figcaption>
</figure>

When SMC moves an aircraft from below the **Standby for Ground** bar to the **Pushback Bay**, ACD should instruct the next aircraft in line to standby for ground on the SMC frequency (and move the strip appropriately).

!!! warning "Important"
    Strips must remain in the strip bay of their **current state**, even if they are in a queue. For example, if they have received an airways clearance and are in the queue for pushback, they must remain in the **Cleared Bay**, **not** the Pushback Bay.

## Start Approval
When delays for taxi are excessive (e.g. 15–30 minutes), it may be necessary to include the following ATIS OPR INFO: `START APPROVAL RQ. WHEN READY FOR PUSH BACK OR ENGINE START, CTC [POSITION] ON FREQ [FREQUENCY], FOR START TIME`.

!!! tip
    Start approvals work best in conjunction with a Coordinator position (or with pushback requests on ACD). The [POSITION] and [FREQUENCY] mentioned above should generally be Sydney Coordinator or ACD.

This will ensure aircraft don't end up burning considerable amounts of fuel and potentially disrupting the latter parts of the flight (with insufficient fuel for lengthy en-route sequencing or holds).

With start approvals in operation, aircraft who do not require pushback will contact Coordinator prior to starting. Coordinator should issue an estimated start time to the aircraft, and contact them when they reach the front of the queue to provide start approval. Aircraft are still expected to report ready to taxi to Coordinator, who will follow the procedure above and tell them to standby for ground the SMC frequency.
