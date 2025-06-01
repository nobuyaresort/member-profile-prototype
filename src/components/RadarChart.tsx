import React, { useEffect, useRef } from 'react';

interface Ability {
  name: string;
  value: number;
}

interface RadarChartProps {
  abilities: Ability[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ abilities }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const width = 300;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    const sides = abilities.length;
    
    // Clear previous content
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
    
    // Draw background circles and spokes
    for (let level = 1; level <= 5; level++) {
      const circleRadius = radius * (level / 5);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', centerX.toString());
      circle.setAttribute('cy', centerY.toString());
      circle.setAttribute('r', circleRadius.toString());
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', '#e2e8f0');
      circle.setAttribute('stroke-width', '1');
      svg.appendChild(circle);
    }
    
    // Draw spokes
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', centerX.toString());
      line.setAttribute('y1', centerY.toString());
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', '#e2e8f0');
      line.setAttribute('stroke-width', '1');
      svg.appendChild(line);
      
      // Add labels
      const labelDistance = radius + 20;
      const labelX = centerX + labelDistance * Math.cos(angle);
      const labelY = centerY + labelDistance * Math.sin(angle);
      
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', labelX.toString());
      text.setAttribute('y', labelY.toString());
      text.setAttribute('font-size', '12');
      text.setAttribute('fill', '#4b5563');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.textContent = abilities[i].name;
      svg.appendChild(text);
    }
    
    // Draw data points and polygon
    const points: [number, number][] = [];
    
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
      const value = abilities[i].value / 100;
      const pointRadius = radius * value;
      const x = centerX + pointRadius * Math.cos(angle);
      const y = centerY + pointRadius * Math.sin(angle);
      points.push([x, y]);
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x.toString());
      circle.setAttribute('cy', y.toString());
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', '#667eea');
      svg.appendChild(circle);
    }
    
    // Draw polygon
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const pointsString = points.map(([x, y]) => `${x},${y}`).join(' ');
    polygon.setAttribute('points', pointsString);
    polygon.setAttribute('fill', 'rgba(102, 126, 234, 0.3)');
    polygon.setAttribute('stroke', '#667eea');
    polygon.setAttribute('stroke-width', '2');
    svg.appendChild(polygon);
    
  }, [abilities]);
  
  return (
    <svg 
      ref={svgRef} 
      width="300" 
      height="300" 
      viewBox="0 0 300 300" 
      className="overflow-visible"
    />
  );
};