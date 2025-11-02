"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CORRECT_PASSWORD = "Kacontent2025";
const AUTH_KEY = "KACONTENT_AUTH_KEY";

export const PasswordProtect = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedAuth = sessionStorage.getItem(AUTH_KEY);
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mật khẩu không chính xác. Vui lòng thử lại.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <Card className="w-[350px] shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle>Yêu cầu truy cập</CardTitle>
          <CardDescription>Vui lòng nhập mật khẩu để tiếp tục.</CardDescription>
        </CardHeader>
        <form onSubmit={handlePasswordSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu của bạn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Xác nhận</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};