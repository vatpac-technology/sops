---
title: MAESTRO
---

--8<-- "includes/abbreviations.md"

MAESTRO (pronounced my-stro), also and otherwise known as Traffic Flow Management System (TFMS), is an arrival manager used to generate a sequence of aircraft inbound to an airport from multiple directions.

For a detailed explanation of the system and operations, see the [MAESTRO User Guide](https://maestro.eoinmotherway.dev).

MAESTRO is a semi-automatic system, and will sequence arrivals generally without intervention.
When the number of arriving aircraft increases, a flow controller is required to 'drive' the system, make adjustments as required, and communicate sequencing information to the respective ENR and APP controllers.

MAESTRO is generally not used by TWR controllers, however it allows them to have situational awareness of the flow of inbound aircraft.

The MAESTRO plugin can be accessed from the vatSys menu bar under TFMS. By default, it operates in **offline** mode. Click the Connection Status button (top-left of the Maestro window) to [connect](#synchronisation) to the server, which allows all connected controllers to share sequence information.

## Installation

The vMaestro plugin should be [downloaded](https://github.com/YuKitsune/vMaestro/releases) and placed in your vatSys Plugins folder.

## Abbreviations

| Abbreviation | Definition |
| ------------ | ---------- |
| Feeder Fix (FF) | A point on the TMA boundary. |
| `ETA` | Estimated time of arrival **at the runway**. |
| `STA` | **Scheduled** time of arrival at the runway (landing time) calculated by Maestro. |
| `ETA_FF` | Estimated time of arrival at the **feeder fix**. |
| `STA_FF` | **Scheduled** time of arrival at the feeder fix calculated by Maestro. |
| `TTG` | Time-to-Go from feeder fix to runway threshold. |

## How it works

Maestro tracks flights within 2 hours of the feeder fix or when an FDR is activated for flights from departure airports. vatSys provides updated position information every 30 seconds, and Maestro recalculates estimates and sequence position based on the flight's state.

Flights from departure airports are placed in the Pending list and must be manually inserted by the flow controller. These flights can be inserted prior to departure to absorb delay on the ground.

Maestro calculates landing times (`STA`) based on estimates (`ETA`) and applies delays when the time between consecutive flights is less than the acceptance rate. The `STA_FF` is calculated by subtracting the time-to-go `TTG` from the `STA`.

### The Timeline

Each timeline displays flights at their `STA` (runway view) or `STA_FF` (feeder view).
Generally, enroute views will be feeder views, and TMA/flow views will be runway views.

Each tick on the timeline corresponds to one minute.

Flight labels are mirrored on either side of the timeline, and contain (from innermost to outermost):

1. `STA` (for feeder views) or `STA_FF` (for runway views)
2. Assigned runway
3. Callsign
4. Approach Type (if applicable)
5. `#` if zero delay has been assigned
6. `%` if manual delay (other than zero) has been assigned
7. `+` if the flight must cross the feeder-fix at published speed
8. `*` if the FDR is not coupled to a radar track
9. Delay required (based on the initial `ETA`)
10. Delay remaining (based on the current `ETA`)

Each airport may define additional custom label layouts for specific positions; refer to individual SOPs for details.

![Maestro Window](./img/maestro.png)

#### Delay Figures

In enroute views, only the enroute portion of the required and remaining delay is displayed.
In runway views, the total delay required and remaining is displayed.

The total delay required remains unchanged as the flight absorbs delay. The remaining delay progressively reduces as delay is absorbed. When the remaining delay reads `0`, all required delay has been absorbed.

##### Delay Allocation

Required delay is split between an **enroute** component and a **TMA** component. The TMA component varies between 0 and 5 minutes depending on the feeder fix and runway. For example, feeder fixes that result in straight-in approaches leave less room for vectoring, so less delay can be absorbed in the TMA.

Enroute views have been configured to show only the enroute component.
Runway views are configured to show the **total** delay (ENR + TMA delay).

In the example below, an aircraft has 15 minutes of total required delay: 10 minutes allocated to enroute, and 5 minutes to the TMA.
The enroute label shows **10**, and the TMA label shows **15**.

<div style="display: flex; gap: 1em;">
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="../img/maestro-enr1.png" alt="Enroute view">
    <figcaption>Enroute view</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="../img/maestro-tma1.png" alt="TMA view">
    <figcaption>TMA view</figcaption>
  </figure>
</div>

By the time the aircraft reaches the feeder fix, 9 of the 10 enroute minutes have been absorbed.
The enroute remaining delay drops to **1**, while the TMA remaining delay is now **6** (the 1 minute not absorbed enroute, plus the original 5 minutes of TMA delay).

<div style="display: flex; gap: 1em;">
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="../img/maestro-enr2.png" alt="Enroute view after feeder fix">
    <figcaption>Enroute view</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="../img/maestro-tma2.png" alt="TMA view after feeder fix">
    <figcaption>TMA view</figcaption>
  </figure>
</div>

!!! note
    Once an aircraft passes the feeder fix, its `ETA` stops updating, so delay figures on the label will not change until the next processing cycle after feeder fix passage.

### Flight States

Maestro uses various states that affect how flights are processed. Each state is indicated by a specific color on the flight label:

**<span style="color: rgb(255, 205, 105); background-color: rgb(160, 170, 170);">Unstable</span>**: All new flights start in this state and remain unstable for at least 5 minutes. On each update, the full processing cycle runs: estimates are recalculated, the flight is repositioned in the sequence, and scheduling assigns a runway and `STA`. The runway and approach type may change if an earlier `STA` is available on an alternative runway.

**<span style="color: rgb(0, 0, 96); background-color: rgb(160, 170, 170);">Stable</span>**: Flights become Stable 25 minutes prior to the `ETA_FF`. Stable flights keep their position in the sequence unless displaced by controller action on a preceding flight, or a new flight entering with an earlier `ETA`. There is no alert when required delays change; controllers should regularly review delay figures.

**<span style="color: rgb(255, 255, 255); background-color: rgb(160, 170, 170);">Super Stable</span>**: Flights become SuperStable at the original `ETA_FF` (the `ETA_FF` at the time they became Stable). SuperStable flights are fixed in position. All new flights are positioned after them. Displacement only occurs through controller action on this flight or a preceding flight.

**<span style="color: rgb(96, 0, 0); background-color: rgb(160, 170, 170);">Frozen</span>**: Flights become Frozen within 15 minutes of the `STA`. Frozen flights cannot be displaced at all, even by controller actions.

**<span style="color: rgb(0, 235, 235); background-color: rgb(160, 170, 170);">Landed</span>**: Flights become Landed at the `STA`. The last 5 landed flights remain visible in case of an overshoot, after which they are automatically removed.

### Delaying Action

The delay figure on the flight label is color coded to indicate the suggested delaying action:

- **<span style="color: rgb(0, 105, 0); background-color: rgb(160, 170, 170);">Expedite</span>**: The aircraft needs to speed up, and make up the time shown (a minus sign will be in front of the delay number)
- **<span style="color: rgb(0, 0, 96); background-color: rgb(160, 170, 170);">No delay</span>**: No delaying action required.
- **<span style="color: rgb(0, 0, 96); background-color: rgb(160, 170, 170);">Resume</span>**: Very small delay remaining; aircraft will absorb it by resuming track (e.g., completing a turn out of holding).
- **<span style="color: rgb(0, 235, 235); background-color: rgb(160, 170, 170);">Speed reduction</span>**: Delay can be absorbed linearly using speed control or vectoring.
- **<span style="color: rgb(255, 255, 255); background-color: rgb(160, 170, 170);">Path Stretching</span>**: Delay needs to be absorbed in the TMA.
- **<span style="color: rgb(235, 235, 0); background-color: rgb(160, 170, 170);">Holding</span>**: Extended delay is required.

## Interactions

Right-click on a flight label to access the following functions:

| Function | Description |
| -------- | ----------- |
| Change Runway | Change the runway assigned to this flight. The flight is re-inserted into the sequence based on its `ETA`. |
| Change Approach Type | Change the approach type assigned to this flight. |
| Insert Slot | Insert a slot before or after this flight to reserve runway capacity. |
| Insert Flight | Insert a new flight before or after this flight (overshoot flights, dummy flights). |
| Coordination | Send a flight-specific coordination message for this flight. |
| Change ETA_FF | Manually adjust the `ETA_FF` if the system estimate is inaccurate. |
| Information | Display detailed sequencing information related to this flight. |
| Manual Delay | Assign a manual delay to increase flight priority. The flight will receive no more than the specified delay. |
| Remove | Remove the flight from the sequence (diversions). |
| Recompute | Re-compute the flight's position and landing time as if it were a new flight. Cancels manual delay and manual ETA_FF. |
| Desequence | Move the flight to the De-sequenced list, temporarily removing it from the sequence (holding). |
| Make Pending | If this flight is departing from a departure airport and has not yet departed, place them back into the pending list. |

Additional functions:

| Button | Function |
| ------ | -------- |
| `DEPS` | Opens the Insert a Flight window to manually insert pending flights from departure airports. |
| `COORD` | Opens the Coordination window for sending pre-defined messages to other controllers. |
| `DESQ` | Opens the Desequenced window showing flights that have been de-sequenced. |
| Move Flight | Left-click a flight to select it, then left-click on the timeline to move it to a new time or runway. |
| Swap Flights | Left-click a flight to select it, then left-click another flight to swap their `STA` and runways. |

## General Responsibilities

### Recompute Function

Avoid using the Recompute function unless the Change ETA_FF function is impractical. Recompute recalculates the flight's entire profile and may cause unnecessary disruption to the sequence, while Change ETA_FF allows for targeted corrections to estimate accuracy.

### Runway Assignment

Maestro automatically assigns runways based on the flight's feeder fix and the current TMA configuration. The runway assignment is based on pre-configured rules for each feeder fix.

Maestro does not source runway assignments from vatSys. When a flight is assigned a new runway by ATC, the runway must be changed in Maestro using the Change Runway function (right-click the flight, select Change Runway).

Runway assignments can be manually overridden, however avoid changing the runway less than 15 minutes prior to the `ETA_FF` to prevent disrupting the stable sequence. If a runway change is required during this period, coordinate with the flow controller.

### Exchanging Flights

The swap flights function allows two flights to exchange positions in the sequence. This should be used to reflect the actual sequence when tactical control actions have resulted in a different landing order than planned.

Do not swap flights until they are Stable, Super Stable, or Frozen. Unstable flights are continuously being re-sequenced, and swapping them may result in immediate re-sequencing that negates the swap.

To swap two flights:

1. Left-click the first flight to select it
2. Left-click the second flight
3. Confirm the swap when prompted

The two flights will exchange their `STA` and runway assignments.

## Enroute Responsibilities

### Issuing Runway Assignments

Issue the arrival runway to the flight based on the Maestro allocation. This can be done while the flight is unstable.

If a runway other than the assigned runway is required, advise the flow controller.

### Unstable Flights

Do not issue delay instructions to unstable flights. Unstable flights are continuously being re-sequenced and their delay requirements may change rapidly. Wait until the flight becomes stable before issuing delay instructions.

### Estimate Accuracy

Ensure the `ETA_FF` is accurate at least 10 minutes prior to the feeder fix. If the system estimate is inaccurate, use the Change ETA_FF function (right-click the flight, select Change ETA_FF) to manually adjust it.

Remove any PETOs (Pilot Estimated Time Over) that may affect the accuracy of the system estimates.

!!! note
    The Hold Plugin will set a PETO on the holding point, and the waypoint immediately after it. Do not clear these PETOs.
    When MAESTRO is used in conjunction with the Hold Plugin, the `ETA_FF` will be calculated based on the hold exit time.
    Verify the ETA_FF is accurate upon cancelling a hold, and re-routing the aircraft past the holding point.

!!! tip
    If the ETA_FF is inaccurate, check the TAS in the flight plan is accurate.

### Re-routing

When re-routing a flight via a new feeder fix, use the Recompute function (right-click the flight, select Recompute) after the re-route has been processed. This will recalculate the flight's feeder fix, estimates, and position in the sequence.

### High Priority Flights

For high priority flights (generally used during busy events like WorldFlight), use Manual Delay `00` to ensure the flight receives minimal delay. If a re-route is required, perform the re-route before selecting Manual Delay `00`.

### Feeder Fix Crossing

Ensure flights cross the feeder fix at the `STA_FF`. Use speed control, vectors, or holding to manage the aircraft's arrival time at the feeder fix.

Advise TMA when a flight is more than 1 minute early or 30 seconds late.

### Speed Control

When no `+` symbol is present on the flight label, instruct the aircraft to cross the feeder fix at 250 kts for jets, 210 kts for turboprops, and profile speed for all other props.

Aircraft with the `+` [profile speed indicator](#the-timeline) should cross the feeder fix at profile speed.

### Close `STA_FF` Times

When two aircraft have close `STA_FF` times and longitudinal separation is required, determine the landing order using the runway view or the Information window. The runway view will show the landing sequence and the relative landing times.

### Coordination with Flow

Advise the flow controller when:

- A taxi call is received for flights bound for a Maestro airport. FMP will insert the flight into the sequence from the pending list.
- A runway other than the assigned runway is required.
- Route changes occur (re-routing to a new feeder fix)
- The Recompute, Desequence, or Swap function will be used. Enroute can perform these actions, but Flow must be advised when they occur.

Flow may advise when they are performing large changes to the sequence by sending internal coordination messages.

!!! warning "Important"
    Do not issue delay instructions to aircraft if Flow has sent the `Flow planning in progress...` coordination message. Wait until the `Maestro delay times accurate...` message is received.

## Approach Responsibilities

### Sequence Monitoring and Workload Management

Monitor the incoming sequence and anticipate the impending workload.

Coordinate with the flow controller if the arrival rate needs to be adjusted.

### Absorb Remaining Delay

If an aircraft enters the TMA with any delay remaining, use speed control and vectoring to absorb the remaining delay.

### Inserting Overshoots

If coordination with the flow controller is not required, and an aircraft conducts a missed approach or a go-around, approach controllers may re-insert the flight into the sequence either by moving them up the ladder, or using the Insert Flight function.

!!! note
    Frozen flights cannot be moved. Overshoot flights may need to be inserted after the last Frozen flight (before the first SuperStable flight) if there is not enough space between Frozen flights.

### Coordination with Flow

Advise the flow controller when:

- A taxi call is received for flights within the TMA bound for a Maestro airport. FMP will insert the flight into the sequence from the pending list.
- An aircraft conducts a missed approach or go-around.
- The Insert, Move, Swap, or Desequence functions will be used. Approach can perform these actions, but Flow must be advised when they occur.

## Flow Responsibilities

### Sequence Monitoring

Monitor the sequence for any anomalies, including:

- Flights with excessive delay
- Flights tracking via unexpected feeder fixes
- Uncoupled flights (indicated by `*` on the label)
- Flights requiring runway changes
- Pending flights that need to be inserted

### Sequence Adjustments

Adjust the sequence as required using the available functions (Move Flight, Change Runway, Manual Delay, etc.) to minimise delay.

Before making large adjustments to the sequence:

1. Send the `Flow planning in progress...` coordination message to all positions
2. Make the required adjustments
3. Once completed, send the `Maestro delay times accurate...` message to all positions

This alerts controllers that delay figures may be temporarily inaccurate and prevents them from issuing outdated delay instructions.

### Pending Flights

Flights from designated departure airports (i.e. those within approximately 30 minutes flight time that will track via a feeder fix) appear in the Pending list and are inserted using the `DEPS` button.
Maestro will automatically calculate a sequence position and any required delay based on the selected Take-Off time.

Periodically review the Pending list and insert flights when notified of their intention to depart.
Coordinate with relevant units and advise them of the expected delay and landing time.

!!! tip
    By activating flights early, Maestro can calculate delays for flights still on the ground.
    Advise pilots of the expected delay and landing time prior to departure to allow them to absorb the delay on the ground rather than in the air.
    The remaining delay does not update until they depart and are correlated to a radar track.

### Arrivals from within the TMA

Aircraft departing from aerodromes within the TMA that will **not** track via a feeder fix cannot be automatically sequenced by Maestro.
These flights must be inserted directly onto the ladder using the `Insert Flight` function (right-click a flight or the ladder, select `Insert Flight`).

!!! warning "Important"
    When inserting a TMA departure using `Insert Flight`, the flight is placed at the time you select. Maestro will not calculate a sequence position or delay.

### Slots

Create slots as required to restrict arrivals and manage traffic flow. Slots reserve runway capacity for special operations or configuration changes.

To insert a slot:

1. Right-click on the timeline in a runway view
2. Select `Insert Slot`
3. Adjust the start and end times as necessary
4. Click `OK` to insert the slot

Slots can be modified by left-clicking on the slot to reopen the Insert Slot window. Non-frozen flights within a slot will be automatically delayed until after the slot has ended.

### TMA Configuration Changes

Adjust landing rates and TMA configuration as required based on traffic demand and operational requirements.

Before making changes to the TMA configuration:

1. Send the `Standby for configuration change...` coordination message to all positions
2. Make the configuration change using the TMA Configuration window
3. Review the sequence and make any necessary adjustments
4. Once completed, send the `Maestro delay times accurate...` message to all positions

When scheduling a future configuration change, ensure the transition time allows sufficient buffer for aircraft in the sequence to land under the current configuration.

If only the acceptance rate needs to change, use the Change Landing Rates function rather than a full configuration change. Configuration changes recompute the entire sequence from the transition point, which may cause unnecessary disruption.

## Synchronisation

When connected to the Maestro server, the sequence is synchronised between all connected controllers. This allows multiple controllers to view and interact with the same sequence in real-time.

Connection to the Maestro server is established by clicking the Connection Status button (top-left of the Maestro window) to open the connection settings.

### Permissions

When Flow is online, different positions have different levels of access to Maestro functions.
The following table shows which functions are available to each position:

| Function | Enroute | Approach | Flow | Description |
| -------- | ------- | -------- | ---- | ----------- |
| Change TMA Configuration | | | ✓ | Modify TMA configuration and runway modes |
| Change Landing Rates | | | ✓ | Adjust runway acceptance rates |
| Move Flight | | ✓ | ✓ | Move a flight to a different time or runway |
| Change Feeder Fix Estimate | ✓ | | ✓ | Manually adjust the `ETA_FF` |
| Manage Slots | | | ✓ | Insert, modify, or remove slots |
| Insert Overshoot | | ✓ | ✓ | Insert overshoot flights into the sequence |
| Insert Departure | | | ✓ | Insert pending departures into the sequence |
| Insert Dummy | | | ✓ | Insert dummy flights into the sequence |
| Make Pending | ✓ | ✓ | ✓ | Move a departure back to the pending list |
| Change Runway | ✓ | ✓ | ✓ | Change the runway assigned to a flight |
| Manual Delay | ✓ | ✓ | ✓ | Assign a manual delay to increase flight priority |
| Make Stable | ✓ | | ✓ | Force a flight to become stable |
| Recompute | ✓ | | ✓ | Re-compute the flight's position and landing time |
| Desequence | ✓ | ✓ | ✓ | Move a flight to the de-sequenced list |
| Resequence | | | ✓ | Re-insert a de-sequenced flight into the sequence |
| Remove Flight | ✓ | ✓ | ✓ | Remove a flight from the sequence |
| Coordination | ✓ | ✓ | ✓ | Send coordination messages |

### Status Indicator

The Online Status Indicator in the Configuration Zone displays the current connection status:

| Status | Meaning |
| ------ | ------- |
| `OFFLINE` | Not connected to the Maestro server. All processing is local, and all functions are available. |
| `READY` | Connected to the Maestro server but not yet connected to VATSIM. No data is synchronised. |
| `FLOW` | Connected as Flow. Your instance processes the sequence and distributes it to other controllers. |
| `APP` | Connected as Approach. A Flow controller is online. Some functions are restricted (see [Permissions](#permissions)). |
| `ENR` | Connected as Enroute. A Flow controller is online. Some functions are restricted (see [Permissions](#permissions)). |
| `ENR/FLOW` or `APP/FLOW` | Connected as Enroute or Approach with Flow authority. No dedicated Flow controller is online. All functions are available. |
| `OBS` | Connected as Observer. The sequence is read-only. |
