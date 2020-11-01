import { exec } from 'child_process';

export const randomString = (length: number) => Math.random().toString(36).substring(length);
export const clip = (value: number, min: number, max: number): number => Math.max(min, Math.min(value, max));

/**
 * Execute simple shell command (async wrapper).
 * @param {string} cmd
 * @return {Promise} { stdout: string, stderr: string }
 */
export const sh = async (cmd: string): Promise<{stdout: string, stderr: string}> =>
    new Promise((resolve, reject) => {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });