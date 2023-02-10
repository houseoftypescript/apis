import express from 'express';
import app from '../src/app';

app.use(express.static('public'));

export default app;
