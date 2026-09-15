'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as Tabs from '@radix-ui/react-tabs';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  FileWarning,
  FolderLock,
  Inbox,
  Mail,
  Monitor,
  RotateCcw,
  UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './attack-explorer.css';

/**
 * Adapted from the supplied React/TypeScript component.
 *
 * Framework adaptations:
 *  - internal links use next/link, so navigating to a Nerv page is a client
 *    transition rather than a full document load;
 *  - the stylesheet is co-located and imported here, which the App Router
 *    supports from any component.
 *
 * Brand alignment (layout, geometry and animation are untouched — only hues):
 *  - Nerv Cyan #00D2DD and Nerv Magenta #F303B0 replace the supplied #38d6ff
 *    and #ff3d9a, and the ground is Void Black to match the Nerv section below;
 *  - the attack / attempt route uses the kit's severity amber #F59E0B. The kit
 *    keeps severity as a scale separate from brand colour, which is exactly
 *    what an in-progress attack is here.
 *
 * Note one deliberate divergence from the kit's semantic table: it assigns
 * magenta to threat and cyan to defence, whereas this graphic uses cyan for
 * the detection signal and magenta for the response. That is the supplied
 * design's own language and inverting it would rewrite the animation's story,
 * so the roles are preserved and only the hues are brand values.
 *
 * Every scenario href is checked against a real route: /nerv/id, /nerv/edr
 * and /nerv/ai are generated from app/nerv/[slug], and /nerv is the hub.
 */

type Asset = {
  label: string;
  role: string;
  detail: string;
  icon: LucideIcon;
};

type Chapter = {
  title: string;
  text: string;
  status: string;
  caption: string;
};

type Scenario = {
  id: string;
  label: string;
  module: string;
  href: string;
  description: string;
  assets: [Asset, Asset, Asset];
  chapters: [Chapter, Chapter, Chapter];
  path: string;
  inlineInspection?: boolean;
};

const scenarios: Scenario[] = [
  {
    id: 'id',
    label: 'Account takeover',
    module: 'Nerv-ID',
    href: '/nerv/id',
    description: 'A compromised Microsoft 365 account.',
    assets: [
      {
        label: 'Attacker',
        role: 'Entry',
        icon: UserRound,
        detail:
          'The attacker uses stolen credentials. In this example, a gap in MFA protection allows the sign-in.',
      },
      {
        label: 'Work mailbox',
        role: 'Affected account',
        icon: Mail,
        detail:
          'The compromised Microsoft 365 mailbox is where Nerv-ID monitors sign-ins and rule changes, and applies the account response.',
      },
      {
        label: 'External inbox',
        role: 'Destination',
        icon: Inbox,
        detail:
          'An attacker-controlled address receives forwarded email. Removing the rule stops further forwarding; the team investigates any earlier exposure.',
      },
    ],
    chapters: [
      {
        title: 'One account opens the door.',
        text:
          'Stolen credentials and a gap in MFA protection let an attacker sign in to a work mailbox. Nerv-ID monitors the account activity for signs of takeover.',
        status: 'Monitoring sign-in activity',
        caption: 'The attacker gains access to the work mailbox.',
      },
      {
        title: 'A small rule. A wider breach.',
        text:
          'The attacker adds a forwarding rule that sends incoming email to an external inbox. Nerv-ID detects the suspicious change and connects it to the account activity.',
        status: 'Suspicious forwarding rule detected',
        caption:
          'Sign-in activity and mailbox changes reveal the incident.',
      },
      {
        title: 'Revoke access. Stop the forwarding.',
        text:
          'Nerv-ID revokes sessions, requires a password reset and removes the malicious rule. Your team closes the MFA gap and investigates what was accessed or sent before containment.',
        status: 'Sessions revoked. Forwarding rule removed.',
        caption: 'Contain the account, then investigate the impact.',
      },
    ],
    path: 'Attacker → work mailbox → external inbox',
  },
  {
    id: 'edr',
    label: 'Ransomware',
    module: 'Nerv-EDR',
    href: '/nerv/edr',
    description: 'A malicious file runs on a workstation.',
    assets: [
      {
        label: 'Malicious file',
        role: 'Entry',
        icon: FileWarning,
        detail:
          'In this example, a user opens a malicious download. The file starts a process on their workstation.',
      },
      {
        label: 'Workstation',
        role: 'Affected device',
        icon: Monitor,
        detail:
          'Nerv-EDR observes processes, file activity and network connections on the endpoint. This is where the suspicious behaviour is detected.',
      },
      {
        label: 'Shared files',
        role: 'At risk',
        icon: FolderLock,
        detail:
          'Files on a writable network share may be reachable from the compromised device. They are a potential next target, not proof that another machine is infected.',
      },
    ],
    chapters: [
      {
        title: 'One file starts a process.',
        text:
          'A user opens a malicious download. It launches on their workstation with access to local files and a shared drive. Nerv-EDR monitors the process and its behaviour.',
        status: 'Monitoring the workstation',
        caption: 'The initial execution happens on the endpoint.',
      },
      {
        title: 'The behaviour gives it away.',
        text:
          'The process begins encrypting files and attempts to interfere with recovery. Nerv-EDR detects the ransomware behaviour. Writable shared files are also at risk.',
        status: 'Ransomware behaviour detected',
        caption: 'The shared drive is a possible next target.',
      },
      {
        title: 'Contain the device. Limit the damage.',
        text:
          'The response team isolates the workstation and stops the malicious process. They then check affected files and recovery options. Containment limits further damage; it does not restore files already encrypted.',
        status: 'Team response: isolate and stop the process',
        caption:
          'Contain the endpoint, assess the damage and recover.',
      },
    ],
    path: 'Malicious file → workstation → shared files at risk',
  },
  {
    id: 'ai',
    label: 'Prompt injection',
    module: 'Nerv-AI',
    href: '/nerv/ai',
    description: 'A hostile request targets an AI application.',
    inlineInspection: true,
    assets: [
      {
        label: 'Hostile prompt',
        role: 'Attempt',
        icon: FileWarning,
        detail:
          'The request tries to override the application’s instructions and persuade it to reveal restricted information.',
      },
      {
        label: 'AI application',
        role: 'Protected app',
        icon: Bot,
        detail:
          'Nerv-AI inspects the request before it reaches the model. In this example, the hostile request is blocked at that inspection point.',
      },
      {
        label: 'Restricted data',
        role: 'Intended target',
        icon: Database,
        detail:
          'This is what the attacker wants the application to reveal. The dashed route shows the intended outcome, not a successful data leak. Access controls remain essential.',
      },
    ],
    chapters: [
      {
        title: 'The request carries an instruction.',
        text:
          'An attacker sends a prompt designed to override an AI application’s rules and reveal restricted information. The request reaches the Nerv-AI inspection point before the model.',
        status: 'Inspecting the incoming request',
        caption:
          'The dashed route shows the attacker’s intended path.',
      },
      {
        title: 'Inspect it before the model sees it.',
        text:
          'Nerv-AI identifies the prompt injection at the application’s entry point. The graphic sends that detection signal to the centre. The hostile request has not reached the model or its data.',
        status: 'Prompt injection identified at the entry point',
        caption: 'Inspection happens before model execution.',
      },
      {
        title: 'Block the request at the boundary.',
        text:
          'Nerv-AI blocks this hostile request before it reaches the model. The intended route to restricted data stays closed. The team can review the event and the application’s controls.',
        status: 'Hostile request blocked before the model',
        caption:
          'The attempted route ends at the inspection point.',
      },
    ],
    path:
      'Hostile prompt → inspection point. The model and data remain unreached.',
  },
];

const phases = ['Entry', 'Detection', 'Response'];

type Point = { x: number; y: number };
type Curve = [Point, Point, Point];

function pointOn([a, b, c]: Curve, t: number): Point {
  return {
    x: (1 - t) ** 2 * a.x + 2 * (1 - t) * t * b.x + t * t * c.x,
    y: (1 - t) ** 2 * a.y + 2 * (1 - t) * t * b.y + t * t * c.y,
  };
}

function AttackOrbit({
  scenario,
  stage,
  motionEnabled,
}: {
  scenario: Scenario;
  stage: number;
  motionEnabled: boolean;
}) {
  const area = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<(HTMLButtonElement | null)[]>([]);
  const gate = useRef<HTMLDivElement>(null);
  const stageRef = useRef(stage);
  const refresh = useRef<() => void>(() => {});
  const pointer = useRef({ x: 0, y: 0 });
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    stageRef.current = stage;
    refresh.current();
  }, [stage]);

  useEffect(() => {
    const el = area.current;
    const surface = canvas.current;
    if (!el || !surface) return;

    const ctx = surface.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;
    let visible = false;
    let disposed = false;
    let expansion = motionEnabled ? 0.58 : 1;
    let px = 0;
    let py = 0;

    const targetExpansion = () => {
      if (stageRef.current === 1) return 1.08;
      if (stageRef.current === 2) return 1;
      return w < 420 ? 0.94 : 0.83;
    };

    function stroke(
      curve: Curve,
      color: string,
      dashed = false,
      width = 1.4,
      from = 0,
      to = 1,
    ) {
      ctx!.strokeStyle = color;
      ctx!.lineWidth = width;
      ctx!.setLineDash(dashed ? [4, 6] : []);
      ctx!.beginPath();

      for (let i = 0; i <= 40; i++) {
        const p = pointOn(curve, from + ((to - from) * i) / 40);
        if (i === 0) ctx!.moveTo(p.x, p.y);
        else ctx!.lineTo(p.x, p.y);
      }

      ctx!.stroke();
      ctx!.setLineDash([]);
    }

    function arrow(curve: Curve, color: string, t = 0.64) {
      const p = pointOn(curve, t);
      const before = pointOn(curve, t - 0.02);
      const angle = Math.atan2(p.y - before.y, p.x - before.x);

      ctx!.strokeStyle = color;
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(
        p.x - 7 * Math.cos(angle - 0.5),
        p.y - 7 * Math.sin(angle - 0.5),
      );
      ctx!.lineTo(p.x, p.y);
      ctx!.lineTo(
        p.x - 7 * Math.cos(angle + 0.5),
        p.y - 7 * Math.sin(angle + 0.5),
      );
      ctx!.stroke();
    }

    function packet(curve: Curve, color: string, t: number) {
      const p = pointOn(curve, t);
      ctx!.fillStyle = color;
      ctx!.shadowBlur = 9;
      ctx!.shadowColor = color;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.shadowBlur = 0;
    }

    function draw(now: number) {
      if (!w || !h || disposed) return;

      const s = stageRef.current;
      const time = motionEnabled ? now / 1000 : 0;
      const cx = w / 2;
      const cy = h * 0.49;
      const radius = Math.min(w * 0.34, h * 0.34) * expansion;
      const hubRadius = window.innerWidth <= 560 ? 35 : 44;

      const positions = [-145, -35, 90].map((degrees, i) => {
        const angle = (degrees * Math.PI) / 180;
        return {
          x: cx + Math.cos(angle) * radius + px * (i - 1) * 5,
          y: cy + Math.sin(angle) * radius + py * (i - 1) * 4,
        };
      });

      ctx!.clearRect(0, 0, w, h);

      const glow = ctx!.createRadialGradient(
        cx, cy, 8, cx, cy, radius * 1.4,
      );
      glow.addColorStop(
        0,
        s === 2
          ? 'rgba(243,3,176,.10)'
          : 'rgba(0,210,221,.075)',
      );
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = glow;
      ctx!.fillRect(0, 0, w, h);

      // Decorative orbital marks, not connections between systems.
      for (let ring = 0; ring < 3; ring++) {
        ctx!.strokeStyle = `rgba(255,255,255,${0.07 + ring * 0.02})`;
        ctx!.lineWidth = 0.7;
        ctx!.setLineDash(ring === 1 ? [2, 9] : []);
        ctx!.beginPath();
        ctx!.ellipse(
          cx,
          cy,
          radius * (0.72 + ring * 0.23),
          radius * (0.45 + ring * 0.23),
          -0.18 + ring * 0.18,
          0,
          Math.PI * 2,
        );
        ctx!.stroke();
        ctx!.setLineDash([]);
      }

      for (let i = 0; i < 54; i++) {
        const a = (i / 54) * Math.PI * 2 + time * 0.024;
        const r = radius * (1.13 + (i % 5) * 0.024);
        ctx!.fillStyle = `rgba(0,210,221,${0.12 + (i % 4) * 0.06})`;
        ctx!.beginPath();
        ctx!.arc(
          cx + Math.cos(a) * r,
          cy + Math.sin(a) * r * 0.88,
          i % 9 === 0 ? 1.6 : 0.7,
          0,
          Math.PI * 2,
        );
        ctx!.fill();
      }

      // Attack paths stay around the perimeter, outside the Nerv hub.
      const incoming: Curve = [
        positions[0],
        { x: cx, y: cy - radius * 1.63 },
        positions[1],
      ];
      const onward: Curve = [
        positions[1],
        { x: cx + radius * 1.52, y: cy + radius * 0.54 },
        positions[2],
      ];

      const inspection = pointOn(incoming, 0.61);
      const amber = s === 2 ? '#6e4e12' : '#f59e0b';

      if (scenario.inlineInspection) {
        stroke(incoming, amber, s === 2, 1.6, 0, 0.61);
        stroke(incoming, '#5c4410', true, 1, 0.61, 1);
        arrow(incoming, amber, 0.32);
      } else {
        stroke(incoming, amber, s === 2);
        arrow(incoming, amber, 0.55);
      }

      // Only the mailbox example shows an active onward transfer.
      // Shared files remain a potential ransomware target.
      // The AI application's downstream path is attempted, not reached.
      const onwardActive = scenario.id === 'id' && s === 1;
      stroke(
        onward,
        onwardActive ? '#f59e0b' : '#5c4410',
        !onwardActive,
        onwardActive ? 1.6 : 1,
      );
      arrow(onward, onwardActive ? '#f59e0b' : '#8a6a1c', 0.57);

      if (s < 2) {
        packet(
          incoming,
          '#f59e0b',
          (motionEnabled ? (time * 0.23) % 1 : 0.38) *
            (scenario.inlineInspection ? 0.58 : 1),
        );

        if (onwardActive) {
          packet(
            onward,
            '#f59e0b',
            motionEnabled ? (time * 0.21 + 0.35) % 1 : 0.5,
          );
        }
      }

      // Detection signals travel inward from the monitored system.
      // For AI, inspection occurs before the application/model.
      const monitored = scenario.inlineInspection
        ? inspection
        : positions[1];

      const towardHub = Math.atan2(
        monitored.y - cy,
        monitored.x - cx,
      );

      const hubEdge = {
        x: cx + Math.cos(towardHub) * hubRadius,
        y: cy + Math.sin(towardHub) * hubRadius,
      };

      const dx = monitored.x - hubEdge.x;
      const dy = monitored.y - hubEdge.y;

      const telemetry: Curve = [
        monitored,
        {
          x: (monitored.x + hubEdge.x) / 2 - dy * 0.18,
          y: (monitored.y + hubEdge.y) / 2 + dx * 0.18,
        },
        hubEdge,
      ];

      stroke(
        telemetry,
        s === 0 ? '#0a6b71' : '#00d2dd',
        false,
        s === 1 ? 1.7 : 1,
      );
      arrow(telemetry, '#00d2dd', 0.64);

      if (s === 1) {
        packet(
          telemetry,
          '#00d2dd',
          motionEnabled ? (time * 0.37) % 1 : 0.48,
        );
      }

      // Response actions travel outward, separately from attack paths.
      if (s === 2) {
        const response: Curve = [
          hubEdge,
          {
            x: (monitored.x + hubEdge.x) / 2 + dy * 0.2,
            y: (monitored.y + hubEdge.y) / 2 - dx * 0.2,
          },
          monitored,
        ];

        stroke(response, '#f303b0', false, 2);
        arrow(response, '#ffc9fe', 0.62);
        packet(
          response,
          '#f303b0',
          motionEnabled ? (time * 0.32) % 1 : 0.5,
        );

        if (!scenario.inlineInspection) {
          const stop = pointOn(onward, 0.29);
          const next = pointOn(onward, 0.31);
          const angle =
            Math.atan2(next.y - stop.y, next.x - stop.x) +
            Math.PI / 2;

          ctx!.strokeStyle = '#f303b0';
          ctx!.lineWidth = 2.5;
          ctx!.beginPath();
          ctx!.moveTo(
            stop.x - Math.cos(angle) * 9,
            stop.y - Math.sin(angle) * 9,
          );
          ctx!.lineTo(
            stop.x + Math.cos(angle) * 9,
            stop.y + Math.sin(angle) * 9,
          );
          ctx!.stroke();
        }
      }

      ctx!.strokeStyle = s === 2 ? '#f303b0' : '#00d2dd';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(cx, cy, hubRadius + 7, 0, Math.PI * 2);
      ctx!.stroke();

      ctx!.strokeStyle =
        s === 2
          ? 'rgba(243,3,176,.18)'
          : 'rgba(0,210,221,.18)';
      ctx!.beginPath();
      ctx!.arc(
        cx,
        cy,
        hubRadius + 15 + (motionEnabled ? Math.sin(time * 1.3) * 3 : 0),
        0,
        Math.PI * 2,
      );
      ctx!.stroke();

      // HTML buttons and Canvas use the same coordinates.
      positions.forEach((position, i) => {
        nodes.current[i]?.style.setProperty(
          'transform',
          `translate(calc(-50% + ${position.x - cx}px), calc(-50% + ${position.y - cy}px))`,
        );
      });

      gate.current?.style.setProperty(
        'transform',
        `translate(calc(-50% + ${inspection.x - cx}px), calc(-50% + ${inspection.y - cy}px))`,
      );
    }

    function tick(now: number) {
      frame = 0;
      if (disposed || !motionEnabled || !visible || document.hidden) {
        return;
      }

      const dt = last ? Math.min(now - last, 64) : 16.7;
      last = now;
      const ease = 1 - Math.exp(-dt / 160);

      expansion += (targetExpansion() - expansion) * ease;
      px += (pointer.current.x - px) * ease;
      py += (pointer.current.y - py) * ease;

      draw(now);
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      if (disposed) return;

      if (motionEnabled && visible && !document.hidden) {
        if (!frame) {
          last = 0;
          frame = requestAnimationFrame(tick);
        }
      } else {
        cancelAnimationFrame(frame);
        frame = 0;

        if (!motionEnabled) {
          expansion = targetExpansion();
          px = 0;
          py = 0;
        }

        draw(0);
      }
    }

    function resize() {
      w = el!.clientWidth;
      h = el!.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      surface!.width = Math.round(w * dpr);
      surface!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      sync();
    }

    const sizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(
      entries => {
        visible = entries[0].isIntersecting;
        sync();
      },
      { rootMargin: '100px' },
    );

    sizeObserver.observe(el);
    visibilityObserver.observe(el);
    refresh.current = sync;
    document.addEventListener('visibilitychange', sync);
    resize();

    return () => {
      disposed = true;
      refresh.current = () => {};
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [motionEnabled, scenario]);

  return (
    <figure className="orbit-figure" data-stage={stage}>
      <div className="orbit-legend" aria-label="Diagram key">
        <span className="legend-attack">Attack / attempt</span>
        <span className="legend-signal">Detection signal</span>
        <span className="legend-response">Response</span>
      </div>

      <div
        className="attack-orbit"
        ref={area}
        onPointerMove={event => {
          if (!motionEnabled || event.pointerType !== 'mouse') return;
          const r = event.currentTarget.getBoundingClientRect();
          pointer.current = {
            x: (event.clientX - r.left) / r.width - 0.5,
            y: (event.clientY - r.top) / r.height - 0.5,
          };
        }}
        onPointerLeave={() => {
          pointer.current = { x: 0, y: 0 };
        }}
      >
        <canvas ref={canvas} aria-hidden="true" />

        <Link
          href={scenario.href}
          className="orbit-nucleus"
          aria-label={`Explore ${scenario.module}`}
        >
          <strong>nerv<span>.</span></strong>
          <span>{scenario.module}</span>
        </Link>

        {scenario.assets.map((asset, i) => (
          <button
            key={asset.label}
            type="button"
            ref={node => { nodes.current[i] = node; }}
            className={`orbit-node orbit-node-${i}`}
            aria-pressed={selected === i}
            aria-controls={`orbit-detail-${scenario.id}`}
            onClick={() => setSelected(i)}
          >
            <asset.icon aria-hidden="true" />
            <strong>{asset.label}</strong>
            <span>{asset.role}</span>
          </button>
        ))}

        {scenario.inlineInspection && (
          <div ref={gate} className="orbit-gate">
            <span aria-hidden="true">{stage === 2 ? '×' : '+'}</span>
            <strong>
              {stage === 2 ? 'Blocked here' : 'Inspection'}
            </strong>
          </div>
        )}

        <p className="orbit-click-hint">Click a system to explore</p>
      </div>

      <div className="orbit-status" role="status" aria-atomic="true">
        <span aria-hidden="true" />
        {scenario.chapters[stage].status}
      </div>

      <div
        id={`orbit-detail-${scenario.id}`}
        className="orbit-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <strong>{scenario.assets[selected].label}</strong>
        <p>{scenario.assets[selected].detail}</p>
      </div>

      <figcaption>
        <span>{scenario.path}</span>
        Illustrative scenario. Dashed routes are inactive or potential.
      </figcaption>
    </figure>
  );
}

function ScenarioStory({
  scenario,
  motionEnabled,
}: {
  scenario: Scenario;
  motionEnabled: boolean;
}) {
  const [stage, setStage] = useState(0);

  return (
    <Tabs.Root
      value={String(stage)}
      onValueChange={value => setStage(Number(value))}
      className="defence-tabs"
    >
      <div className="story-controls">
        <p>{scenario.description} Click through each stage.</p>

        <Tabs.List
          className="story-chapter-nav"
          aria-label={`Stages of ${scenario.label.toLowerCase()}`}
        >
          {phases.map((phase, i) => (
            <Tabs.Trigger
              key={phase}
              value={String(i)}
              className="story-tab"
            >
              <span>0{i + 1}</span>
              {phase}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      <div className="story-layout">
        <div className="story-copy">
          <div className="chapter-stack">
            {scenario.chapters.map((chapter, i) => (
              <Tabs.Content
                key={i}
                value={String(i)}
                forceMount
                aria-hidden={stage !== i}
                tabIndex={stage === i ? 0 : -1}
                className="story-chapter"
              >
                <div className="orbit-chapter-label">
                  {scenario.module} / {phases[i]}
                </div>
                <h2>{chapter.title}</h2>
                <p>{chapter.text}</p>
                <Link href={scenario.href} className="story-text-link">
                  Explore {scenario.module}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Tabs.Content>
            ))}
          </div>

          <div className="story-step-controls">
            <button
              type="button"
              className="story-step previous-step"
              onClick={() => setStage(s => Math.max(0, s - 1))}
              disabled={stage === 0}
              aria-label="Previous stage"
            >
              <ArrowLeft aria-hidden="true" />
            </button>

            <span>0{stage + 1} / 03</span>

            {stage < 2 ? (
              <button
                type="button"
                className="story-step next-step"
                onClick={() => setStage(s => s + 1)}
              >
                {stage === 0 ? 'See the detection' : 'See the response'}
                <ArrowRight aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className="story-step next-step"
                onClick={() => setStage(0)}
              >
                Replay
                <RotateCcw aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <AttackOrbit
          scenario={scenario}
          stage={stage}
          motionEnabled={motionEnabled}
        />
      </div>

      <div className="story-bottom">
        <span>{scenario.chapters[stage].caption}</span>
        <div className="story-progress" aria-hidden="true">
          <div style={{ transform: `scaleX(${(stage + 1) / 3})` }} />
        </div>
      </div>
    </Tabs.Root>
  );
}

export default function AttackExplorer({
  motionEnabled = true,
}: {
  motionEnabled?: boolean;
}) {
  const [active, setActive] = useState(scenarios[0].id);
  const [allowsMotion, setAllowsMotion] = useState(false);

  // Self-contained motion preference; no global page provider required.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setAllowsMotion(!media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const enabled = motionEnabled && allowsMotion;

  return (
    <section
      id="connected-defence"
      className="sc-attack-explorer"
      data-motion={enabled ? 'on' : 'off'}
      aria-label="Explore cyber attacks and the response"
    >
      <div className="attack-wrap story-top">
        <div className="story-eyebrow">How an attack unfolds</div>
        <Link href="/nerv" className="story-skip">
          Meet Nerv <ArrowDown size={14} aria-hidden="true" />
        </Link>
      </div>

      <Tabs.Root
        value={active}
        onValueChange={setActive}
        className="attack-wrap attack-scenarios"
      >
        <div className="attack-scenario-selector">
          <span id="attack-choice-label">Choose an attack</span>

          <Tabs.List
            aria-labelledby="attack-choice-label"
            className="attack-scenario-tabs"
          >
            {scenarios.map((scenario, i) => (
              <Tabs.Trigger
                key={scenario.id}
                value={scenario.id}
                className="attack-scenario-tab"
              >
                <span>0{i + 1}</span>
                {scenario.label}
                <ArrowUpRight aria-hidden="true" />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>

        {scenarios.map(scenario => (
          <Tabs.Content
            key={scenario.id}
            value={scenario.id}
            className="attack-scenario-content"
          >
            <ScenarioStory
              scenario={scenario}
              motionEnabled={enabled}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
}
