"use client";

import { useEffect } from "react";

export default function CoreUIProvider() {
  useEffect(() => {
    const initCoreUI = async () => {
      const { Sidebar } = await import('@coreui/coreui/dist/js/coreui.esm.min.js' as any);

      document.querySelector('.header-toggler')?.addEventListener('click', () => {
        const el = document.getElementById('sidebar')
  
        if (!el) return
  
        const sidebar = new Sidebar(el)
        sidebar.toggle()
      })
  
      document.querySelector('.btn-close')?.addEventListener('click', () => {
        const el = document.getElementById('sidebar')
  
        if (!el) return
  
        const sidebar = new Sidebar(el)
        sidebar.toggle()
      })
    };

    initCoreUI();
  }, []);

  return null;
}