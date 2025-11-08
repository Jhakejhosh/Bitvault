'use client';

import { useState } from 'react';

interface TextTruncateProps {
  text: string;
  maxLength?: number;
}

export default function TextTruncate({ 
  text, 
  maxLength = 200 
}: TextTruncateProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncated = text.length > maxLength 
    ? text.slice(0, maxLength) + '...' 
    : text;

  const shouldTruncate = text.length > maxLength;

  return (
    <div className="text-gray-400 md:text-center">
      <div className="leading-relaxed">
        {isExpanded ? text : truncated}
        {shouldTruncate && (
        <p
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white/80 hover:text-white font-medium text-sm transition cursor-pointer"
        >
          {isExpanded ? 'show less' : 'show more'}
        </p>
      )}
      </div>

      
    </div>
  );
}