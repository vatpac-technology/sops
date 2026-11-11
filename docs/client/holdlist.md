---
title: Hold List
---

--8<-- "includes/abbreviations.md"

## Background

The Hold plugin replicates the Eurocat Hold window and functionality, helping Enroute and Terminal controllers manage traffic in holding stacks or performing airwork over a specified location.

<figure markdown>
![Hold Window](./img/hold-list.png){ width="600" }
</figure>

## How it works

The plugin keeps each hold in the flight plan remarks, in the standard DLE format: `DLE/[waypoint][HHMM]`. `HHMM` is the length of the delay. For example, `DLE/TARAL0020` is a delay of 20 minutes at `TARAL`. All controllers can see the hold in the flight plan. The plugin also reads a DLE that the pilot filed in the flight plan.

The hold exit time is the arrival time at the hold point plus the delay. Before the aircraft gets to the hold point, the exit time changes when the estimate for the hold point changes.

While the hold is active:

- vatSys does not move the aircraft along its route past the hold point.
- vatSys calculates the estimates for the waypoints after the hold point from the hold exit time.
- vatSys does not show a Route Adherence Monitoring (RAM) alert for the aircraft.

## Initiating a Hold

You must have permission to change the flight plan (e.g. you have jurisdiction of the aircraft) to initiate, change, or cancel a hold.

Initiate a hold in one of these ways:

| Method | Description |
| ------ | ----------- |
| Hold key | Select the aircraft, put the mouse cursor on the hold position, then press `F8`. The hold has a delay of 10 minutes. |
| Strip | Right-click the estimate of a waypoint in the strip. Type the delay in the `HHMM` format, then press `Enter`. One or two digits are minutes. |

When you use the hold key:

- If the cursor is near a waypoint on the route, the hold is at that waypoint.
- If the cursor is not near a waypoint on the route, the plugin re-routes the aircraft direct to the cursor position, then to the waypoint on the route that is nearest to the cursor position. The hold is at the cursor position.

You can change the hold key in Settings > Keyboard, in the `Hold` row.

!!! note
    If you initiate a hold at a waypoint that is further along the route, the plugin adds the DLE to the remarks, but the hold does not show until the hold point is the next waypoint.


## Strip

When an aircraft holds, the hold point shows two times in the strip:

- The first time shows the time of arrival at the hold point, with an `A`. Before the aircraft gets to the hold point, this is the estimate. After the aircraft gets to the hold point, this is the actual time.
- The second time shows the hold exit time, with a `D`.

<figure markdown>
![Hold Strip](./img/hold-strip.png){ width="600" }
</figure>

When the aircraft is in the hold, the strip starts at the hold point.

## Changing a Hold

Change the hold in one of these ways:

| Method | Description |
| ------ | ----------- |
| Strip | Right-click the arrival time or the exit time of the hold point. Change the delay in the `HHMM` format, then press `Enter`. |
| Hold List | Click the hold exit time, then select a new exit time. |

## Terminating a Hold

A hold stops in one of these ways:

| Method | Description |
| ------ | ----------- |
| Hold List | Middle-click the ACID. |
| Hold key | Select the aircraft, then press `F8`. |
| Re-route | Re-route the aircraft so that its route does not go through the hold point. |
| Automatic | After the hold exit time, the hold stops when vatSys finds that the aircraft has left the hold point. |

When you cancel a hold from the Hold List or with the hold key, the plugin removes the DLE from the remarks, and the hold from the Label Data.

!!! note
    The re-route and automatic methods apply only to holds in the remarks. To stop a hold that is only in the Label Data, remove it from the Label Data.

!!! warning
    If the aircraft leaves the hold before the exit time, the plugin does not find it. Cancel the hold manually.

## Hold Lists

The hold list displays flights ordered by their CFL.

When a block clearance has been issued, the CFL is displayed as `xxxByyy`, where `xxx` is the lower level, and `yyy` is the upper level.

An `X` will be displayed if the aircraft is non-RVSM.

The hold entry and exit times are displayed in the label. The exit can be adjusted by clicking on it to select a new exit time.

The `OP_DATA` can also be viewed and edited from the hold label.

<figure markdown>
![Hold Label Diagram](./img/hold-diagram.png){ width="700" }
</figure>

## Configuring Lists

Up to 4 holding lists are available.
When a hold is initiated at a waypoint that does not already have a list, one is created automatically.
When all holds at that waypoint are removed, the list is freed and the slot becomes available again.

Lists can also be configured manually via Tools > Hold Setup.
Manually configured lists are not freed automatically; they must be cleared via the Hold Setup window.

Any aircraft holding at a waypoint when all 4 lists are already occupied will be placed in the `OTHER` list.

<figure markdown>
![Hold Windows](./img/hold-windows.png){ width="550" }
</figure>
