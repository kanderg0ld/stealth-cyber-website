/*
 * Hero effect from the owner's "Stealth-Cyber-Hero-Effect" package (source
 * b5b9d74, 29 September 2026): the hacker holds, glitches in cyan/magenta,
 * collapses like a TV switching off, gives way to scrolling attack-style code,
 * then returns. 16-second loop. Timing, keyframes and imagery are unchanged;
 * colours in hero-signal.css are moved onto the Nerv palette.
 */
/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import "./hero-signal.css";

// Decorative, fictional terminal output. Nothing here connects to a system.
const sequence = [
  ["dim", "// STEALTH CYBER · THREAT SIMULATION"],
  ["cyan", "session.open(0x7F31)  →  connected"],
  ["dim", "[00:01.042] mapping external surface"],
  ["", "target    203.0.113.42 / edge-gateway"],
  ["", "fingerprint :: identity / cloud / endpoint"],
  ["pink", "> anomalous authentication sequence"],
  ["", "trace.id  8f:2a:09:c1:7e:04"],
  ["dim", "01001101  01100101  01101101  01101111"],
  ["cyan", "identity.graph  →  traverse()"],
  ["", "session.token   [REDACTED]"],
  ["pink", "! unexpected privilege transition"],
  ["", "event.chain     correlate(signals)"],
  ["dim", "[00:02.891] endpoint → identity → cloud"],
  ["", "packet.offset   0x0000FF / 0x00A731"],
  ["cyan", "observe(network)  ::  tracing path"],
  ["", "01110011  01110100  01100101  01100001"],
  ["pink", "> lateral movement pattern observed"],
  ["dim", "route  198.51.100.24 → internal service"],
  ["", "process.tree    parent / child / origin"],
  ["", "sequence.hash   a37f:002b:91ce:ff04"],
  ["cyan", "nerv.correlation  →  signal linked"],
  ["dim", "[00:04.117] evidence stream attached"],
  ["pink", "! attack path reconstructed"],
  ["", "session.close()  ::  return to source"],
];

export type HeroSignalProps = {
  imageSrc?: string;
  paused?: boolean;
  durationSeconds?: number;
};

export default function HeroSignal({
  imageSrc = "/hero-hacker-illustrated.webp",
  paused = false,
  durationSeconds = 16,
}: HeroSignalProps) {
  const style = {
    "--signal-duration": `${durationSeconds}s`,
  } as CSSProperties;
  return (
    <div className="sc-hero-signal" aria-hidden="true" data-paused={paused ? "true" : "false"} style={style}>
      <div className="sc-hero-picture">
        <img className="sc-hero-portrait" src={imageSrc}
          width="1536" height="1024" alt="" decoding="async" {...{ fetchpriority: "high" }} />
        <img className="sc-hero-portrait sc-hero-ghost sc-hero-ghost-cyan"
          src={imageSrc} width="1536" height="1024" alt="" decoding="async" />
        <img className="sc-hero-portrait sc-hero-ghost sc-hero-ghost-pink"
          src={imageSrc} width="1536" height="1024" alt="" decoding="async" />
      </div>
      <div className="sc-hero-terminal">
        {[0, 1].map(column => (
          <div className={`sc-hero-code-column sc-hero-code-column-${column}`} key={column}>
            <div className="sc-hero-code-track">
              {[0, 1].map(copy => (
                <div className="sc-hero-code-block" key={copy}>
                  {sequence.map(([tone, text], index) => (
                    <div className={`sc-hero-code-line ${tone}`} key={index}>
                      <span className="sc-hero-code-number">{(index * 16 + column * 384).toString(16).padStart(4, "0")}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sc-hero-power-line" />
      <div className="sc-hero-signal-scan" />
      <div className="sc-hero-shade" />
      <div className="sc-hero-grain" />
    </div>
  );
}
