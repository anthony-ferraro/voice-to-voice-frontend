"use client";

import React, { useState } from 'react';
import { Container, Box, Button, Typography, IconButton } from '@mui/material';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleConnect = () => {
    // TODO: Implement WebRTC connection
    setIsConnected(!isConnected);
  };

  const handleSpeakToggle = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Voice AI Assistant
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <IconButton
            color={isSpeaking ? 'secondary' : 'primary'}
            onClick={handleSpeakToggle}
            disabled={!isConnected}
            sx={{ fontSize: '3rem' }}
          >
            {isSpeaking ? '🔊' : '🎤'}
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color={isConnected ? 'secondary' : 'primary'}
          onClick={handleConnect}
        >
          {isConnected ? 'Disconnect' : 'Connect'}
        </Button>

        {isSpeaking && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              mt: 2,
            }}
          >
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 4,
                  height: 16,
                  backgroundColor: 'primary.main',
                  animation: 'wave 1s ease-in-out infinite',
                  animationDelay: `${index * 0.1}s`,
                  '@keyframes wave': {
                    '0%, 100%': { transform: 'scaleY(0.5)' },
                    '50%': { transform: 'scaleY(1)' },
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
}
