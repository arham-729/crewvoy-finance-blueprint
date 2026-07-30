import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export interface OrbitItem {
  emoji?: string;
  imgSrc?: string;
  label: string;
  ring?: 0 | 1;
}

const OrbitChip = ({
  emoji,
  imgSrc,
  label,
  angle,
  radius,
  ringDuration,
  size,
  delay = 0,
}: {
  emoji?: string;
  imgSrc?: string;
  label: string;
  angle: number;
  radius: number;
  ringDuration: number;
  size: number;
  delay?: number;
}) => (
  <div
    className="absolute top-1/2 left-1/2"
    style={{
      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
    }}
  >
    {/* counter-spin so chip stays upright */}
    <motion.div
      animate={{ rotate: ringDuration > 0 ? -360 : 360 }}
      transition={{ duration: Math.abs(ringDuration), repeat: Infinity, ease: "linear", delay }}
    >
      {imgSrc ? (
        <img src={imgSrc} alt={label} style={{ width: size, height: size, objectFit: "contain" }} />
      ) : (
        <span style={{ fontSize: size, lineHeight: 1 }}>{emoji}</span>
      )}
    </motion.div>
  </div>
);

const FloatingWidget = ({
  centerImg,
  centerLabel,
  orbit = [],
}: {
  centerImg: string;
  centerLabel: string;
  orbit?: OrbitItem[];
}) => {
  const ring0 = orbit.filter((o) => (o.ring ?? 0) === 0);
  const ring1 = orbit.filter((o) => o.ring === 1);

  const isMobile = useIsMobile();
  const INNER_DUR = 22;
  const OUTER_DUR = 36;
  const centerSize = isMobile ? 120 : 200;
  const innerRadius = isMobile ? 80 : 135;
  const outerRadius = isMobile ? 115 : 195;
  const innerChipSize = isMobile ? 22 : 34;
  const outerChipSize = isMobile ? 18 : 28;

  return (
    <div
      className="relative w-full max-w-[260px] xs:max-w-[300px] md:max-w-[420px] mx-auto aspect-square flex items-center justify-center select-none pointer-events-none"
      style={{ perspective: 900 }}
    >
      {/* whole scene tilts in 3D as one unit — slow looping tilt */}
      <motion.div
        animate={{
          rotateX: [8, -6, 8],
          rotateY: [-10, 10, -10],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* bob the whole scene */}
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* center icon — just bobs, chips orbit around it */}
          <img
            src={centerImg}
            alt={centerLabel}
            className="relative z-10"
            style={{
              width: centerSize,
              height: centerSize,
              objectFit: "contain",
              filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.14))",
            }}
          />

          {/* INNER orbit */}
          {ring0.length > 0 && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: INNER_DUR, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {ring0.map((o, i) => (
                <OrbitChip
                  key={i}
                  emoji={o.emoji}
                  imgSrc={o.imgSrc}
                  label={o.label}
                  angle={(360 / Math.max(ring0.length, 1)) * i}
                  radius={innerRadius}
                  ringDuration={INNER_DUR}
                  size={innerChipSize}
                  delay={i * 0.3}
                />
              ))}
            </motion.div>
          )}

          {/* OUTER orbit */}
          {ring1.length > 0 && (
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: OUTER_DUR, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {ring1.map((o, i) => (
                <OrbitChip
                  key={i}
                  emoji={o.emoji}
                  imgSrc={o.imgSrc}
                  label={o.label}
                  angle={(360 / Math.max(ring1.length, 1)) * i + 45}
                  radius={outerRadius}
                  ringDuration={-OUTER_DUR}
                  size={outerChipSize}
                  delay={i * 0.5}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingWidget;
