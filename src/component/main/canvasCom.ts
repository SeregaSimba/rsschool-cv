// canvas compo
interface SkillCircle {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  percent: number;
  radius: number;
  lineWidth: number;
  duration: number;
}

export default function CanvasCreate() {
  function setupCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not found");

    const size = canvas.clientWidth;
    canvas.width = size;
    canvas.height = size;
    return ctx;
  }

  function animateSkillCircle(skill: SkillCircle, onComplete: () => void) {
    const { ctx, canvas, percent, radius, lineWidth, duration } = skill;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let startTime: number | null = null;
    function animate(time: number) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const endAngle = -Math.PI / 2 + 2 * Math.PI * (percent / 100) * progress;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "grey";
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle, false);
      ctx.strokeStyle = "gold";

      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.stroke();
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    }

    requestAnimationFrame(animate);
  }

  function startAllAnimations() {
    const skillDivs = document.querySelectorAll<HTMLDivElement>(".radius");
    const skills: SkillCircle[] = [];

    skillDivs.forEach((div) => {
      const canvas = div.querySelector("canvas");
      if (!canvas) return;
      const percent = Number(canvas.dataset.percent) || 0;
      const ctx = setupCanvas(canvas);
      const radius = canvas.width / 2 - 3;
      const lineWidth = 8;
      const duration = 10000;

      skills.push({ canvas, ctx, percent, radius, lineWidth, duration });
    });
    function animateAll() {
      let completedCount = 0;
      skills.forEach((skill) => {
        animateSkillCircle(skill, () => {
          completedCount++;
          if (completedCount === skills.length) {
            setTimeout(() => {
              resetAll();
              animateAll();
            }, 10000);
          }
        });
      });
    }

    function resetAll() {
      skills.forEach(({ ctx, canvas, radius, lineWidth }) => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "grey";
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      });
    }
    animateAll();

    let resizeTimeout: number | undefined;

    window.addEventListener("resize", () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        location.reload();
      }, 300);
    });
  }

  window.addEventListener("load", startAllAnimations);
}
// canvas compo
